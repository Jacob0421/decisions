import { render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Shop from './Shop';

afterEach(() => {
    cleanup();
});


test('shop', () => {
    render(<Shop />);
    const title = screen.getByText(/shop/i);
    expect(title).toBeInTheDocument();
    //expect(true).toBe(true);
});

test('shop2', () => {
    render(<Shop />);
    const shopElement = screen.getByTestId('shop-1');
   // const title = screen.getByText(/shop/);
    expect(shopElement).toBeInTheDocument();
    expect(shopElement).toHaveTextContent('Shop');
});

test('matches snapshot', () => {
    const tree = renderer.create(<Shop />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});
