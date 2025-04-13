import { render, screen, fireEvent } from '@testing-library/react';
import Recommendations from '../components/Recommendations';

const reccs = [
  {
    name: 'Green light',
    artist: 'Lorde',
    album: 'Melodrama',
  },
  {
    name: 'Greenlight',
    artist: 'Tate McRae',
    album: 'So Close To What',
  },
];

describe('Recommendations Component', () => {
  test('renders correctly', () => {
    render(<Recommendations recommendations={reccs} />);

    reccs.forEach((rec) => {
      expect(screen.getByText(rec.name)).toBeInTheDocument();
      expect(screen.getByText(rec.album)).toBeInTheDocument();
      expect(screen.getByText(rec.artist)).toBeInTheDocument();
    });
  });
});
