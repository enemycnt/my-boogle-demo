import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border-bottom: 3px solid #CCC;
  margin-top: 5px;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
`

export const BookName = styled.div`
  margin: 2px 0;
  font-weight: 700;
`
export const AuthorName = styled.div`
  margin: 2px 0;
  color: rgba(0,0,0,0.5);
`

export const YearPublished = styled.div`
  margin: 2px 0;
  color: rgba(0,0,0,0.3);
`

export const Main = styled.div`
  width: 480px;
  background-color: #FFF; 
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(255,255,255,.7);
  display: flex;
  flex-direction: column;
`

export const SearchForm = styled.form`
  display: flex;
  padding: 15px 15px;
  background-color: #232F3E;
`
export const TextField = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 1.2rem; 
  border-radius: 5px 0 0 5px;
  border: none;
  outline: none;
`
export const SearchButton = styled.button`
  padding: 10px;
  border-radius: 0 5px 5px 0;
  background-color: #F3A847;
  border: none;
`
export const NoResult = styled.div`
  padding: 15px 0;
`
