import React from "react";
import { ModalDiv } from "./modal.style";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";
import { withTheme } from "styled-components";

const Modal = ({ theme, modalArray, handleModalReturn }) => {
  return (
    <ModalDiv color={theme}>
      <div className={"modal-content-body"}>
        {modalArray.map((item, key) => (
          <div key={key} className={`${item.classbody}`}>
            <div>
              {item.component && (
                <div className={"modal-content-component"}>
                  <item.component view={"300px"} />
                </div>
              )}
            </div>

            {item.linktext && (
              <div className={"modal-content-link"}>
                <Link href={item.link}>
                  <a>
                    <div className={"modal-content-link-item"}>
                      <p>{item.linktext}</p>
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={"modaliconbody"} onClick={handleModalReturn}>
        <RiCloseFill className={"modalicon"} />
      </div>
    </ModalDiv>
  );
};

export default withTheme(Modal);
