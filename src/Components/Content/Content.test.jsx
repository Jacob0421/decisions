import { render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Content from './Content';

afterEach(() => {
    cleanup();
});


/*test('Content', () => {
    render(<Content />);
    const title = screen.getByText(/Content/i);
    expect(title).toBeInTheDocument();
});*/

test('Content2', () => {
    render(<Content />);
    const shopElement = screen.getByTestId('content-1');
    expect(shopElement).toBeInTheDocument();
   // expect(shopElement).toHaveTextContent('Shop');
});

test('buttonPress', () => {
    render(<Content />);
    const showShop = screen.getByText(/show shop/i);
    expect(showShop).toBeInTheDocument();
});