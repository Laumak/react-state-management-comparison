import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { PokemonPage } from './pages/PokemonPage';
import { TodosPage } from './pages/TodosPage';

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: 'none',
  padding: '4px 8px',
  borderRadius: '4px',
  background: isActive ? '#e8f0fe' : 'transparent',
  color: 'inherit',
});

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header
          style={{
            padding: '12px 24px',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <strong style={{ fontSize: '0.875rem', color: '#666' }}>Redux Toolkit</strong>
          <nav style={{ display: 'flex', gap: '8px' }}>
            <NavLink to="/todos" style={navLinkStyle}>
              Todo List
            </NavLink>
            <NavLink to="/pokemon" style={navLinkStyle}>
              Pokédex
            </NavLink>
          </nav>
        </header>
        <main style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/todos" replace />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/pokemon" element={<PokemonPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}
