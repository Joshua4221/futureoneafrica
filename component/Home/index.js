import React from "react";
import { withTheme } from "styled-components";
import { HomeDiv } from "./home.styles";

const HomePage = ({ theme, postArray, videoArray }) => {
  return (
    <HomeDiv color={theme}>
      <div className={"miniHome"}>
        <div className={"header-home"}>
          <div className={"header-link"}>
            <p>LATEST</p>
            <p>TRENDING</p>
          </div>
          <div className={"header-drop"}>
            <button>
              <p>Filter</p>
            </button>
          </div>
        </div>

        <div>
          <div></div>
          <div>
            {postArray?.map((item, key) => (
              <div key={key}></div>
            ))}
          </div>
        </div>
      </div>
      <div className={"mainHome"}>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uK_RQSWWhh0"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
        <div>
          {videoArray?.map((item, key) => (
            <div key={key}>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uK_RQSWWhh0"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowfullscreen
                ></iframe>
              </div>
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeDiv>
  );
};

export default withTheme(HomePage);
