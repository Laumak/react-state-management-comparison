import type { Todo } from '@repo/mock-api';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 0',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ width: '18px', height: '18px', cursor: 'pointer', flexShrink: 0 }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          opacity: todo.completed ? 0.45 : 1,
          fontSize: '1rem',
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.2rem',
          color: '#999',
          lineHeight: 1,
          padding: '0 4px',
        }}
      >
        ×
      </button>
    </li>
  );
}
