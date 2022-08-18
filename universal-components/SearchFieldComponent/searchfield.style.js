import styled from "styled-components";

export const SearchfieldDiv = styled.div`
  padding: 15px 25px;
  background-color: ${({ Color }) => Color.PrimaryColor};

  .search {
    color: ${({ Color }) => Color.SecondaryColor};
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const InputF = styled.input`
  color: ${({ Color }) => Color.SecondaryColor};
  width: 95%;
  background-color: transparent;
  font-size: 16px;
  padding: 6px 14px;
  border: 1px solid transparent;
  outline: none;
  margin: 0px 10px;
`;

export const InputDiv = styled.div`
  border-radius: 8px;
  width: ${({ view }) => (view ? view : "250px")};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.185);
  border: 1px solid ${({ Color }) => Color.SectionColor};

  @media (max-width: 414px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 250px;
  }

  @media (max-width: 290px) {
    width: 230px;
  }
`;
