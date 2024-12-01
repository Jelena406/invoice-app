import { screen } from '@testing-library/react';
import Header from './Header';
import { renderWithRouter } from '../setupTests'
import App from '../App';
describe('renders header', () => {
    test('renders header with add task enabled', () => {
        renderWithRouter(<App />, {
            route: '/dashboard/:id'
        });
        const linkElement = screen.getByText(/add new task/i);
        expect(linkElement).toBeEnabled();
    })

    test('renders header with add task disabled', () => {
        renderWithRouter(<App />, {
            route: '/new-dashboard'
        });
        const linkElement = screen.getByText(/add new task/i);
        expect(linkElement).toBeDisabled();
    })

    test('it martches snapshot', () => {
        const component = renderWithRouter(<Header />);
        expect(component).toMatchSnapshot();
    })
});
