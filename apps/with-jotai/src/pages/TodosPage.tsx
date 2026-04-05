import { useAtom, useAtomValue } from 'jotai';
import { TodoInput, TodoList } from '@repo/ui';
import type { FilterValue } from '@repo/ui';
import { filterAtom, filteredTodosAtom, todosAtom } from '../atoms/todosAtom';

export function TodosPage() {
  const [, setTodos] = useAtom(todosAtom);
  const [filter, setFilter] = useAtom(filterAtom);
  const filteredTodos = useAtomValue(filteredTodosAtom);

  function addTodo(text: string) {
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text, completed: false }]);
  }

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Todo List</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        State managed with <strong>Jotai</strong> — atomic, bottom-up state
      </p>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        filter={filter}
        onFilterChange={(f: FilterValue) => setFilter(f)}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
