import { render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Heaven from './Heaven';

afterEach(() => {
    cleanup();
});


test('Heaven', () => {
    render(<Heaven />);
    const title = screen.getByText(/Heaven/i);
    expect(title).toBeInTheDocument();
});