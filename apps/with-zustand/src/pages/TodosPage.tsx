import { TodoInput, TodoList } from '@repo/ui';
import { useTodosStore } from '../stores/todosStore';

export function TodosPage() {
  const { items, filter, addTodo, toggleTodo, deleteTodo, setFilter } = useTodosStore();

  const filteredTodos = items.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Todo List</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        State managed with <strong>Zustand</strong> — minimal store, no boilerplate
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
