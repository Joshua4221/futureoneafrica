import styled from "styled-components";

export const FormDiv = styled.div`
  border-radius: 20px;
  width: 80%;
  margin: 0px auto;
  padding: 20px 10px;
  border: 1px solid ${({ color }) => color.PrimaryColor};

  .inputBody {
    text-align: center;
    width: 100%;
    margin: 20px auto;
    color: ${({ color }) => color.PrimaryColor};

    .inputItem {
      display: flex;
      align-items: center;
      width: 80%;
      border: 1px solid ${({ color }) => color.PrimaryColor};
      margin: 0px auto;
      padding: 2px 10px;
      border-radius: 20px;

      .inputicon {
        font-size: 18px;
      }

      .input {
        background-color: transparent;
        border: none;
        outline: none;
        margin: 0px 10px;
        width: 90%;
        padding: 10px 15px;
        color: ${({ color }) => color.PrimaryColor};
      }
    }
  }

  .submitBody {
    .submit {
      background-color: ${({ color }) => color.PrimaryColor};
      color: ${({ color }) => color.SecondaryColor};
      outline: none;
      border: none;
      padding: 8px 15px;
      border-radius: 7px;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
