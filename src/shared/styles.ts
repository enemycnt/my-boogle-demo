import styled from 'styled-components';

export const Main = styled.div`
  width: 480px;
  background-color: #FFF; 
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(255,255,255,.7);
  display: flex;
  flex-direction: column;
`
export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  height: 100%;
  box-sizing: border-box;
`

export const ErrorMessage = styled.div`
  padding: 15px 0;
  font-weight: 700;
  color: red;
`

export const Loading = styled.div`
  padding: 15px 0;
  font-weight: 700;
`