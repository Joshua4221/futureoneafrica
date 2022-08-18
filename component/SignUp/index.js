import React from "react";
import { withTheme } from "styled-components";
import Form from "../../universal-components/FormComponet";
import { SignUpArr } from "../../utils/Signup";
import { SignInDiv } from "../SignIn/signin.style";
import { BsPersonCircle } from "react-icons/bs";

const SignUp = ({ theme }) => {
  return (
    <SignInDiv color={theme}>
      <div className={"icons"}>
        <BsPersonCircle className={"iconsItem"} />
      </div>
      <Form formArray={SignUpArr} />
    </SignInDiv>
  );
};

export default withTheme(SignUp);
