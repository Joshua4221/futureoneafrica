import styled from "styled-components";

export const SignInDiv = styled.div`
  background-color: ${({ color }) => color.SecondaryColor};
  padding: 20px;
  width: 40%;
  margin: 10% auto;
  border-radius: 20px;
  text-align: center;

  .icons {
    padding: 20px;

    .iconsItem {
      font-size: 50px;
      color: ${({ color }) => color.PrimaryColor};
    }
  }
`;
