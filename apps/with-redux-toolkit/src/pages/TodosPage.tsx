import { TodoInput, TodoList } from '@repo/ui';
import type { FilterValue } from '@repo/ui';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addTodo, deleteTodo, setFilter, toggleTodo } from '../features/todos/todosSlice';

export function TodosPage() {
  const dispatch = useAppDispatch();
  const { items, filter } = useAppSelector((state) => state.todos);

  const filteredTodos = items.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Todo List</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        State managed with <strong>Redux Toolkit</strong> — <code>createSlice</code> + Immer
      </p>
      <TodoInput onAdd={(text) => dispatch(addTodo(text))} />
      <TodoList
        todos={filteredTodos}
        filter={filter}
        onFilterChange={(f: FilterValue) => dispatch(setFilter(f))}
        onToggle={(id) => dispatch(toggleTodo(id))}
        onDelete={(id) => dispatch(deleteTodo(id))}
      />
    </div>
  );
}
