import React, { useState } from "react";
import { withTheme } from "styled-components";
import Form from "../../universal-components/FormComponet";
import { SignInArr } from "../../utils/Signin";
import { SignInDiv } from "./signin.style";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";

const SignIn = ({ theme }) => {
  const [formData, setFormData] = useState({});

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const PostData = async (data) => {
    axios
      .post(`/api/egister`, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    PostData(formData);
  };

  return (
    <SignInDiv color={theme}>
      <div className={"icons"}>
        <BsPersonCircle className={"iconsItem"} />
      </div>
      <Form
        formArray={SignInArr}
        handleSubmit={HandleSubmit}
        handleChange={HandleChange}
      />
    </SignInDiv>
  );
};

export default withTheme(SignIn);
