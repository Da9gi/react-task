import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ButtonDefault = styled.button`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  margin: 10px auto;
  margin-top: 15px;
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonReset = styled(ButtonDefault)`
  background-image: linear-gradient(#ffffff, #d5d5d5);
  border: 1px solid #d5d5d5;

  &:hover {
    background-image: linear-gradient(#ffffff, #d5d5d5);
    &[disabled] {
      background-image: linear-gradient(#ffffff, #d5d5d5);
    }
  }
  color: red;
`;

export const ButtonSubmit = styled(ButtonDefault)`
  background-image: linear-gradient(#4f93ce, #285f8f);
  border: 1px solid #285f8f;
  &:hover {
    background-image: linear-gradient(#4f93ce, #285f8f);
    &[disabled] {
      background-image: linear-gradient(#4f93ce, #285f8f);
    }
  }
  color: white;
`;

export const ShowValues = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const FormWrap = styled.div`
font-family: sans-serif;
max-width: 800px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: green;
        width: 150px;
        font-size: 1em;
        line-height: 32px;
      }
`;
export const Input = styled.input`
  flex: 1;
  padding: 3px 5px;
  font-size: 1em;
  margin-left: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const InputCheckBox = styled(Input)`
  margin-top: 7px;
`;

export const Td = styled.td`
  padding: 0 50px;
`;

export const TdTeam = styled(Td)`
  padding: 0 100px;
`;

export const Heading = styled(Title)`
  text-align: left;
  font-size: 1.2em;
  color: green;
`;

export default styled.div`
  text-align: center;
`;
