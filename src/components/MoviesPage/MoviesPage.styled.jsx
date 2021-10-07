import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Item = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  :hover {
    color: salmon;
  }
`;
