import { render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Hell from './Hell';

afterEach(() => {
    cleanup();
});


test('Hell', () => {
    render(<Hell />);
    const title = screen.getByText(/Hell/i);
    expect(title).toBeInTheDocument();
});