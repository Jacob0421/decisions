import { render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Purgatory from './Purgatory';

afterEach(() => {
    cleanup();
});


test('Purgatory', () => {
    render(<Purgatory />);
    const title = screen.getByText(/Purgatory/i);
    expect(title).toBeInTheDocument();
});