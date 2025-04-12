import SearchBar from '../components/Searchbar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('SearchBar Component', () => {
  test('renders correctly', () => {
    render(<SearchBar setSongInput={() => {}} setReccomendations={() => {}} />);

    expect(screen.getByPlaceholderText(/Enter a song/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
