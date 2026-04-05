import type { Todo } from '@repo/mock-api';
import { TodoItem } from './TodoItem';

export type FilterValue = 'all' | 'active' | 'completed';

interface Props {
  todos: Todo[];
  filter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export function TodoList({ todos, filter, onFilterChange, onToggle, onDelete }: Props) {
  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            style={{
              padding: '4px 12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              cursor: 'pointer',
              fontWeight: filter === value ? 'bold' : 'normal',
              background: filter === value ? '#e8f0fe' : 'transparent',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {todos.length === 0 ? (
        <p style={{ color: '#999', fontStyle: 'italic' }}>No todos yet — add one above!</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
          </ul>
          <p style={{ marginTop: '12px', fontSize: '0.875rem', color: '#666' }}>
            {remaining} item{remaining !== 1 ? 's' : ''} left
          </p>
        </>
      )}
    </div>
  );
}
