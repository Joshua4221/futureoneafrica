import styled from "styled-components";

export const HomeDiv = styled.div`
  display: flex;
  color: ${({ color }) => color.SecondaryColor};

  .miniHome {
    width: 30%;
    border: 1px solid ${({ color }) => color.SectionColor};
    padding: 30px 10px;

    .header-home {
      display: flex;
      justify-content: space-between;

      .header-link {
        display: flex;
        p {
          padding: 5px;
        }
      }

      .header-drop {
        button {
          border: none;
          outline: none;
          padding: 5px 8px;
          font-size: 14px;
          color: ;
        }
      }
    }
  }

  .mainHome {
    width: 70%;
    padding: 30px 10px;
    border: 1px solid ${({ color }) => color.SectionColor};
  }
`;
