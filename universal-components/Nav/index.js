import Image from "next/image";
import React from "react";
import { NavDiv } from "./nav.style";
import Link from "next/link";
import { withTheme } from "styled-components";
import { RiCloseFill } from "react-icons/ri";

const Nav = ({
  NavArray,
  onclick,
  state,
  theme,
  nav,
  handleSearch,
  showSearch,
  handleModal,
}) => {
  return (
    <NavDiv color={theme} state={state} nav={nav} showSearch={showSearch}>
      <div className={"navbody"}>
        {NavArray.map((item, key) => (
          <div key={key} className={`${item.classmain}`}>
            {item.section.map((item, key) => (
              <div
                key={key}
                className={`${item.classbody}`}
                onClick={() => {
                  {
                    item.details === "searchicon" && handleSearch();
                    item.details === "hambugger" && handleModal();
                  }
                }}
              >
                {item.image ? (
                  <div className={`${item.classname}`}>
                    <Image
                      src={item.image}
                      alt={"image"}
                      objectFit={"cover"}
                      placeholder={"blur"}
                      blurDataURL
                      priority
                      layout={"responsive"}
                      className={`${item.classitem}`}
                    />
                  </div>
                ) : item.component ? (
                  <div className={`${item.classname}`}>
                    <item.component
                      view={"500px"}
                      className={`${item.classitem}`}
                      onclick={() => item.details === "ldmode" && onclick()}
                    />
                  </div>
                ) : item.icon ? (
                  <div className={`${item.classname}`}>
                    {item.details === "searchicon" && showSearch ? (
                      <RiCloseFill className={"thirdlayoutitemthree"} />
                    ) : (
                      <item.icon className={`${item.classitem}`} />
                    )}
                  </div>
                ) : item.iconSet ? (
                  <div className={`${item.classname}`}>
                    {item.iconSet.map((item, key) => (
                      <div key={key} className={`${item.classbody}`}>
                        {item.linkicon && (
                          <Link href={item.link}>
                            <a>
                              <div className={`${item.classname}`}>
                                <item.linkicon
                                  className={`${item.classitem}`}
                                />
                              </div>
                            </a>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  item.link && (
                    <div className={`${item.classname}`}>
                      <Link href={item.link}>
                        <a>
                          <div className={`${item.classitem}`}>
                            <div className={`${item.classitemlinktext}`}>
                              <p>{item.linktext}</p>
                            </div>
                            {item.linkicon && (
                              <div className={`${item.classitemlinkicon}`}>
                                <item.linkicon
                                  className={`${item.classlinkicon}`}
                                />
                              </div>
                            )}
                          </div>
                        </a>
                      </Link>
                    </div>
                  )
                )}

                <div className={`${item.classitemtext}`}>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </NavDiv>
  );
};

export default withTheme(Nav);
