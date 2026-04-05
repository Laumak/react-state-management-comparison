import { useMachine } from '@xstate/react';
import { TodoInput, TodoList } from '@repo/ui';
import type { FilterValue } from '@repo/ui';
import { todosMachine } from '../machines/todosMachine';

export function TodosPage() {
  const [state, send] = useMachine(todosMachine);
  const { items, filter } = state.context;

  const filteredTodos = items.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Todo List</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        State managed with <strong>XState</strong> — finite state machine with context
      </p>
      <TodoInput onAdd={(text) => send({ type: 'ADD', text })} />
      <TodoList
        todos={filteredTodos}
        filter={filter}
        onFilterChange={(f: FilterValue) => send({ type: 'SET_FILTER', filter: f })}
        onToggle={(id) => send({ type: 'TOGGLE', id })}
        onDelete={(id) => send({ type: 'DELETE', id })}
      />
    </div>
  );
}
