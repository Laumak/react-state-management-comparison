import { TodoInput, TodoList } from '@repo/ui';
import { useTodos } from '../hooks/useTodos';

export function TodosPage() {
  const { items, filter, addTodo, toggleTodo, deleteTodo, setFilter } = useTodos();

  const filteredTodos = items.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Todo List</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        Client state with <strong>TanStack Query</strong> — plain <code>useReducer</code> (TanStack
        Query handles server state only)
      </p>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        filter={filter}
        onFilterChange={setFilter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
