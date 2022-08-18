import React from "react";
import { withTheme } from "styled-components";
import Form from "../../universal-components/FormComponet";
import { SignInArr } from "../../utils/Signin";
import { SignInDiv } from "./signin.style";
import { BsPersonCircle } from "react-icons/bs";

const SignIn = ({ theme }) => {
  return (
    <SignInDiv color={theme}>
      <div className={"icons"}>
        <BsPersonCircle className={"iconsItem"} />
      </div>
      <Form formArray={SignInArr} />
    </SignInDiv>
  );
};

export default withTheme(SignIn);
