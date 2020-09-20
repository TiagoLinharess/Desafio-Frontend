import styled from 'styled-components';

import { Plus } from '../../styles/icons';

export const PlusIcon = styled(Plus)`
  height: 40px;
  color: #5636d3;
  margin-right: 15px;
  border-radius: 50%;

  transition: background-color 0.8s;

  &:hover {
    cursor: pointer;
    background: #b39ddb;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 25vh;
  display: flex;
  flex-direction: column;
  background: #FFF;
  margin-top: 20px;
  overflow: auto;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  section {
    display: flex;
    flex-direction: column-reverse;
  }

  ::-webkit-scrollbar {
    width: 8px;
    border-bottom-left-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5636D3;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #303f9f;
  }
`;

export const List = styled.div`
  max-width: 900px;
  height: 4vh;
  display: flex;
  flex-direction: row;
  background: #FFF;
  margin-top: 2px;
  align-self: center;
  justify-content: space-between;
  margin: 5px 30px 35px 30px;
  padding: 0px 30px 20px 42px;

  p {
    width: 100%;
    max-width: 90px;
    margin-top:26px;
    font-size: 18px;
    margin-left: -20px;
  }

  section {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    nav {
      align-items: center;
      margin-top: 25px;
      margin-right: -40px;
      li{
        list-style-type: none;
        font-size: 16px;
      }

      li + li {
        font-size: 12px;
        color: #90a4ae;
      }
    }
  }

  div {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      margin-right: 20px;
      padding: 0 15px 0 12px;
    }

    button + button {
      margin-right: 8px;
      padding: 0 15px 0 15px;
    }
    @media (max-width: 900px) {    
      margin-left: 60px;
    }
  }

  @media (max-width: 900px) {    
    width: 200%;
    max-width: 1000px;
  }

`;

export const Title = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  margin-bottom: -22px;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e0e0e0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
    margin-left: 15px;
    font-size: 18px;
  }
`;

export const ListForm = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  background: #FFF;
  margin-top: 2px;
  align-self: center;
  justify-content: space-between;
  padding: 5px 30px 10px 30px;
  z-index: 1000;

  p {
    font-size: 18px;
  }

  nav {
    li{
      list-style-type: none;
      font-size: 16px;
    }
  }

  div {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      margin-right: 28px;
      padding: 0 15px 0px 8px;
    }

    button + button {
      margin-right: 28px;
      padding: 0 15px 0px 11px;
    }
  } 

  @media (max-width: 900px) {    
    width: 200%;
    max-width: 1000px;

    nav {
      margin-right: 20px;
    }

  }
`;
