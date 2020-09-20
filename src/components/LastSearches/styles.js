import styled from 'styled-components';
import { Gear } from '../../styles/icons';

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

export const GearIcon = styled(Gear)`
  height: 41px;
  color: #5636d3;
  margin-right: 13px;
  border-radius: 50%;
  padding: 8px;

  transition: background-color 0.8s;

  &:hover {
    cursor: pointer;
    background: #b39ddb;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 15vh;
  display: flex;
  flex-direction: column;
  background: #FFF;
  margin-top: 20px;
  overflow: auto;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5636D3;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #303f9f;
  }

  @media (max-width: 900px) {    
    height: 600px;
  }
`;

export const List = styled.div`
  width: 100%;
  max-width: 900px;
  height: 4vh;
  display: flex;
  flex-direction: row;
  background: #FFF;
  margin-top: 2px;
  align-self: center;
  justify-content: space-between;
  margin: 5px 30px 10px 30px;
  padding: 10px 30px 10px 30px;

  p {
    font-size: 18px;
    width: 100%;
    max-width: 100px;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
    nav {
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

  @media (max-width: 900px) {    
    width: 150%;
    padding-bottom: 50px;
    margin-right: -120px;
    p {
      font-size: 16px;
      width: 60px;
      word-wrap: break-word;
    }

    div {
      margin-left: 20px;
      nav {
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

    div + button {
      margin-left: 20px;
    }
  }
`;
