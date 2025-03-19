import { render, screen } from '@testing-library/react';
import Layout from './Layout';

jest.mock('../Navbar/Navbar', () => {
  const NavbarMock = () => <div>Navbar Mock</div>;
  NavbarMock.displayName = 'Navbar';
  return NavbarMock;
});

describe('Layout', () => {
  it('renders the Navbar component', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    expect(screen.getByText('Navbar Mock')).toBeInTheDocument();
  });

  it('renders children inside the main tag', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
