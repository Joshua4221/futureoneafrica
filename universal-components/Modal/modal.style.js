import styled from "styled-components";

export const ModalDiv = styled.div`
  z-index: 11;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content-body {
    overflow-y: auto;
    background-color: ${({ color }) => color.PrimaryColor};
    height: 100%;
    width: 40%;

    .modal-component-body {
      margin-bottom: 30px;
      padding: 20px 0px;
      border-bottom: 1px solid ${({ color }) => color.SectionColor};
      .modal-content-component {
        text-align: center;
      }
    }

    .modal-link-body {
      .modal-content-link {
        a {
          .modal-content-link-item {
            color: ${({ color }) => color.SecondaryColor};
            font-size: 24px;
            padding: 15px;

            &:hover {
              background-color: ${({ color }) => color.MajorColor};
              color: ${({ color }) => color.MainColor};
            }
          }
        }
      }
    }
  }

  .modaliconbody {
    background-color: ${({ color }) => color.PrimaryColor};
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .modalicon {
      color: ${({ color }) => color.MajorColor};
      font-size: 64px;
      font-weight: 700;
      margin: 30px;
    }
  }
`;
