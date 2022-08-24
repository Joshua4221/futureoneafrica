import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

export const SignInArr = [
  {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "enter your email address",
    classBody: "inputBody",
    classname: "input",
    classitem: "inputItem",
    classicon: "inputicon",
    icon: BsFillPersonFill,
  },
  {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "enter your Password",
    classBody: "inputBody",
    classname: "input",
    classitem: "inputItem",
    classicon: "inputicon",
    icon: RiLockPasswordFill,
  },
  {
    type: "submit",
    value: "Sign In",
    classBody: "submitBody",
    classname: "submit",
  },
];
