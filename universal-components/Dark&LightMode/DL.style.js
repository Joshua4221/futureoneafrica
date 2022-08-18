import styled from "styled-components";

export const DLDiv = styled.div`
  background-color: #f4f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3px;
  width: 4rem;
  border-radius: 20px;
  cursor: pointer;
  /* border: 1px solid ${({ color }) => color.SecondaryColor}; */

  .light {
    display: flex;
    align-items: center;
    transition: all 1.5s linear;
    color: #000;
    padding: 5px 3px;

    .lightMode {
      background-color: #fff;
      border-radius: 50%;
      font-size: 20px;
      padding: 3px;
    }

    p {
      font-size: 12px;
      margin-right: 3px;
      font-weight: Bold;
    }
  }

  .dark {
    display: flex;
    align-items: center;
    transition: all 1.5s linear;
    color: #000;
    padding: 5px 3px;

    .darkMode {
      background-color: #fff;
      border-radius: 50%;
      font-size: 20px;
      padding: 3px;
    }

    p {
      font-size: 12px;
      margin-left: 3px;
      font-weight: Bold;
    }
  }
`;
