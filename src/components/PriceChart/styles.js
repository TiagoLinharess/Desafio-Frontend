import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 25vh;
  display: flex;
  background: #FFF;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;

  @media (max-height: 880px) { 
    height: 300px;
  }

  @media (max-width: 900px) {    
    height: 13vh;
  }
`;

export const HeaderPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  height: 5vh;
  background: #e0e0e0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
    width: 100%;
    max-width: 180px;
    margin-top: 8px;
    margin-left: 13px;
    font-size: 20px;
  }

  form {
    width: 100%;
    max-width: 300px;
    margin-top: 6px;

    input {
      border: 5px solid #fff;
      border-radius: 8px;
    }

    
  }

  @media (max-height: 820px) {    
    height: 50px; 
  }

  @media (max-width: 900px) {    
    height: 12vh;
    margin-top: 12px;
    
    form {
      input {
        margin-right: 20px;
        margin-top: 15px;
         max-width: 200px;
      }

      button {
        display: none;
      }
    }
  }

  div{
    margin-top: 6px;
    margin-right: 13px;
    width: 100%;
    max-width: 150px;
    display: flex;
    flex-direction: row;

    @media (max-width: 900px) {    
      display: none;
    }
  }
`;
