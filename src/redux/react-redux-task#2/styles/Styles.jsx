import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => (props.size ? props.size : "1.5em")};
  text-align: center;
  color: ${props=>props.color?props.color:"black"};
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

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 30px;
`;

export const Show = styled.div`
  margin: 50px;
  padding: 30px;
  background-color: Thistle;
  color: black;
  border: solid red 2px;
  border-radius: 20px;
`;

export const Td = styled.td`
  padding: 0 50px;
`;

export const TdTeam = styled(Td)`
  padding: 0 100px;
`;

export const Heading = styled(Td)`
  font-size: 1.2em;
  color: ${(props) => (props.color ? props.color : "green")};
`;

export default styled.div`
  text-align: center;
`;
