import { Header, Link } from 'App.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
