import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 16px;
  background-size: cover;
  background: linear-gradient(to bottom, #192bec, #caff00);
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: aqua;
  font-weight: 500;
  margin-left: 25px;
  &.active {
    color: khaki;
    border-bottom: 2px solid khaki;
  }
`;
