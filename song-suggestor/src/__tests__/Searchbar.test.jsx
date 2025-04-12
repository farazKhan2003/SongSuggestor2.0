import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  test('renders correctly', () => {
    render(<SearchBar setSongInput={() => {}} setReccomendations={() => {}} />);

    expect(screen.getByPlaceholderText(/Enter a song/)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  test('updates value when user types in searchbar', () => {
    render(<SearchBar setSongInput={() => {}} setReccomendations={() => {}} />);

    const input = screen.getByPlaceholderText(/Enter a song/i);
    fireEvent.change(input, { target: { value: 'Test Song' } });

    expect(input.value).toBe('Test Song');
  });

  test('SetInput when search is actually pressed', () => {
    const setSongInput = jest.fn();
    render(<SearchBar setSongInput={() => {}} setReccomendations={() => {}} />);

    const button = screen.getByText(/Search/);
    fireEvent.click(button);

    expect(setSongInput).toHaveBeenCalledWith('');
  });
});
