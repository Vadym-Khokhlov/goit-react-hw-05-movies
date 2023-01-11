import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-size: cover;
  background-color: darkcyan; // /src/images
  background-image: url('./images/library-header_desktop_1x.jpg');
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 25px;
  &.active {
    color: white;
    background-color: orangered;
  }
`;
