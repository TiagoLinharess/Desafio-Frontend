import styled from 'styled-components';

export const ButtonPlus = styled.button`
  width: 100%;
  max-width: 40px;
  height: 35px;
  border: none;
  border-radius: 6px;
  margin-left: 8px;

  background: #ff9000;
  transition: background-color 0.8s;

  &:hover {
    background: #ef6c00;
  }
`;

export const ButtonAdd = styled.button`
  width: 100%;
  max-width: 100px;
  height: 35px;
  border: none;
  border-radius: 6px;
  margin-left: 8px;

  color: #FFF;
  background: #00c853;
  transition: background-color 0.8s;

  &:hover {
    background: #009624;
  }
`;

export const ButtonDecrement = styled.button`
  width: 100%;
  max-width: 100px;
  height: 35px;
  border: none;
  border-radius: 6px;
  margin-left: 8px;

  color: #FFF;
  background: #d84315;
  transition: background-color 0.8s;

  &:hover {
    background: #9f0000;
  }
`;
