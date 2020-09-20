import styled from 'styled-components';
import { Menu, User } from '../../styles/icons';

export const MenuIcon = styled(Menu)`
  height: 50px;
  color: #fff;
`;

export const UserIcon = styled(User)`
  height: 50px;
  color: #fff;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 53px;
  }
`;

export const Container = styled.div`
  background: #5636d3;
  padding: 30px 0;
  height: 9vh;

  header {
    width: 100vw;
    margin: -15px auto;
    padding: 0 20px ;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      div {
        h1 {
          color: #fff;
          text-decoration: none;
          font-size: 20px;
          transition: opacity 0.2s;
          font-weight: 500;
          margin-right: 20px;

          & + h1 {
            /* margin-left: 32px; */
            font-size: 16px;
            margin-left: 3px;
          }
        }
      }
    }
  }

  @media (max-width: 1360px) {    
    height: 75px; 
  }

  @media (max-width: 900px) {    
    height: 12vh; 
  }
`;
