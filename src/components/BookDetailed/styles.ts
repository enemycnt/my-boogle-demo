import styled from 'styled-components';


export const AppWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  box-sizing: border-box;
  @media (max-width: 500px) {
    padding: 0;

  }
`

export const BookDetailedWrap = styled.div`
  width: 480px;
  background-color: #FFF; 
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(255,255,255,.7);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    border-radius: 0;
  }
`

export const BookTitle = styled.h1`
  margin: 10px
`
export const Details = styled.div`
  margin: 30px
`

export const DetailsTop = styled.div`
  display: flex;
`
export const DetailsProps = styled.div`
  padding: 10px
`

export const DetailsImgWrapping = styled.div`
  width: 180px;
  height: 277px;
  img {
    width: inherit;
    height: inherit;
  }
`

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 0.9rem;
  text-align: left;
  color:  rgba(0,0,0,0.5)
`