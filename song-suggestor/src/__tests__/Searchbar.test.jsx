import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../components/SearchBar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('SearchBar Component', () => {
  test('renders correctly', () => {
    render(<SearchBar setSongInput={() => {}} setReccomendations={() => {}} />);

    expect(screen.getByPlaceholderText(/Enter a song/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
