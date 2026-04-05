import type { Pokemon } from '@repo/mock-api';

interface Props {
  pokemon: Pokemon;
}

const TYPE_COLOURS: Record<string, string> = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

export function PokemonCard({ pokemon }: Props) {
  const { name, sprites, types } = pokemon;

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '16px',
        textAlign: 'center',
        background: '#fafafa',
      }}
    >
      {sprites.front_default ? (
        <img src={sprites.front_default} alt={name} width={96} height={96} />
      ) : (
        <div
          style={{
            width: 96,
            height: 96,
            background: '#e0e0e0',
            margin: '0 auto',
            borderRadius: '50%',
          }}
        />
      )}
      <h3
        style={{
          margin: '8px 0 6px',
          textTransform: 'capitalize',
          fontSize: '1rem',
        }}
      >
        {name}
      </h3>
      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {types.map(({ type }) => (
          <span
            key={type.name}
            style={{
              padding: '2px 10px',
              borderRadius: '12px',
              fontSize: '0.75rem',
              color: '#fff',
              background: TYPE_COLOURS[type.name] ?? '#999',
              textTransform: 'capitalize',
            }}
          >
            {type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
