import { useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) {
      onAdd(trimmed);
      setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        style={{
          flex: 1,
          padding: '8px',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        type="submit"
        style={{ padding: '8px 16px', fontSize: '1rem', cursor: 'pointer', borderRadius: '4px' }}
      >
        Add
      </button>
    </form>
  );
}
