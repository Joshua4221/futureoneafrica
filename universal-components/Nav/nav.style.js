import styled from "styled-components";

export const NavDiv = styled.div`
  background-color: ${({ color, nav }) =>
    nav ? color.SelectColor : color.MinorColor};
  position: relative;

  .navbody {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ color, nav }) => nav === "nav2" && color.MinorColor};
    margin: ${({ nav }) => nav === "nav2" && "0px 20px"};
    position: relative;
    z-index: ${({ nav }) => nav === "nav2" && 3};
    top: ${({ nav }) => nav === "nav2" && "0.9rem"};

    .firstLayout {
      display: flex;
      align-items: center;

      .firstlayoutbodytwo {
        display: none;
        padding: 5px 20px;

        .firstlayoutnametwo {
          .firstlayoutitemtwo {
            font-size: 24px;
            color: ${({ color }) => color.MainColor};
          }
        }

        @media screen and (max-width: 950px) {
          display: block;
        }
      }
    }

    .secondLayout {
      display: none;

      .secondlayoutbodyone {
        .secondlayoutnameone {
          width: 52px;
          height: 40px;
        }
      }

      @media screen and (max-width: 950px) {
        display: flex;
        align-items: center;
      }
    }

    .thirdLayout {
      display: flex;
      align-items: center;
      position: relative;

      .thirdlayoutbodyone {
        padding: 5px 20px;
      }

      .thirdlayoutbodytwo {
        padding: 10px 20px;
        border-left: 2px solid ${({ color }) => color.SectionColor};

        .thirdlayoutnametwo {
          display: flex;
          align-items: center;

          .thirdlayoutbodytwoitem {
            .thirdlayoutnametwoitem {
              padding: 2px 6px;
              .thirdlayoutitemtwofacebook {
                color: ${({ state, color }) =>
                  state === false ? "#44619D" : color.MainColor};
              }

              .thirdlayoutitemtwoinstagram {
                color: ${({ state, color }) =>
                  state === false ? "#DB455B" : color.MainColor};
              }

              .thirdlayoutitemtwoyoutube {
                color: ${({ state, color }) =>
                  state === false ? "#C61D23" : color.MainColor};
              }

              .thirdlayoutitemtwolinkedin {
                color: ${({ state, color }) =>
                  state === false ? "#0083BB" : color.MainColor};
              }

              .thirdlayoutitemtwotiktok {
                color: ${({ state, color }) =>
                  state === false ? "#fff" : color.MainColor};
              }

              .thirdlayoutitemtwotwitter {
                color: ${({ state, color }) =>
                  state === false ? "#5EB2EF" : color.MainColor};
              }
            }
          }
        }

        @media screen and (max-width: 950px) {
          display: none;
        }
      }

      .thirdlayoutbodythree {
        color: ${({ color }) => color.MainColor};
        border-left: 2px solid ${({ color }) => color.SectionColor};
        padding: 10px 20px;

        .thirdlayoutnamethree {
          display: flex;
          align-items: center;
          justify-content: center;

          .thirdlayoutitemthree {
            padding: 0px;
            font-size: 24px;
          }
        }

        @media screen and (max-width: 950px) {
          padding: 8px 20px;
          font-size: 24px;
        }
      }

      .thirdlayoutsearchbodythree {
        display: ${({ showSearch }) => (showSearch ? "block" : "none")};
        position: absolute;
        top: 2.8rem;
        right: 14rem;
        z-index: 5;

        @media screen and (max-width: 950px) {
          right: 0;
        }
      }

      .thirdlayoutbodyfour {
        color: ${({ color }) => color.MainColor};
        border-left: 2px solid ${({ color }) => color.SectionColor};
        padding: 10px 20px;

        @media screen and (max-width: 950px) {
          display: none;
        }
      }
    }

    .firstsubLayout {
      .firstsublayoutbodyone {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid red; */
        padding: 5px;

        .firstsublayoutnameone {
          /* display: flex;
          justify-content: center; */
          border: 1px solid red;

          width: 90px;
          height: 70px;

          .firstsublayoutitemone {
            border: 1px solid red;
          }
        }
      }

      @media screen and (max-width: 950px) {
        display: none;
      }
    }

    .secondsubLayout {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-left: 10px;

      .secondsublayoutbodyone {
        .secondsublayoutnameone {
          a {
            .secondsublayoutitemone {
              font-size: 15px;
              font-weight: 700;
              color: ${({ color }) => color.MajorColor};
              padding: 10px;
              margin: 5px 3px;
              white-space: nowrap;

              .secondsublayoutitemoneitem {
              }

              &:hover {
                border-bottom: 2px solid ${({ color }) => color.MajorColor};
              }
            }

            .secondsublayoutitemonehome {
              color: ${({ color }) => color.MajorColor};
              font-size: 15px;
              font-weight: 700;
              margin: 5px 3px;
              display: flex;
              align-items: center;
              padding: 10px;
              white-space: nowrap;

              .secondsublayoutitemoneitemhome {
                margin-right: 5px;
              }
            }

            .active {
              border-bottom: 2px solid ${({ color }) => color.MajorColor};
            }
          }
        }
      }

      @media screen and (max-width: 950px) {
        flex-wrap: unset;
        vertical-align: baseline;
        overflow-x: auto;
      }
    }

    @media screen and (max-width: 950px) {
      overflow-x: ${({ nav }) => nav === "nav2" && "auto"};
    }
  }
`;
