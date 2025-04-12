import { render, screen, fireEvent } from '@testing-library/react';
import Recommendations from '../components/Recommendations';

const reccs = [
  {
    name: 'Green light',
    artist: 'Lorde',
    album: 'Melodrama',
    albumcover: 'Melodrama.jpg',
  },
  {
    name: 'Greenlight',
    artist: 'Tate McRae',
    album: 'So Close To What',
    albumcover: 'SCTW.jpg',
  },
];

describe('Recommendations Component', () => {
  test('renders correctly', () => {
    render(<Recommendations recommendations={reccs} />);

    reccs.forEach((rec) => {
      expect(screen.getByText(rec.name)).toBeInTheDocument();
      expect(screen.getByText(rec.name)).toBeInTheDocument();
    });
  });
});
