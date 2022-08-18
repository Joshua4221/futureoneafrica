import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

export const SignUpArr = [
  {
    type: "email",
    name: "email",
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
    placeholder: "enter your Password",
    classBody: "inputBody",
    classname: "input",
    classitem: "inputItem",
    classicon: "inputicon",
    icon: RiLockPasswordFill,
  },
  {
    type: "submit",
    value: "Sign Up",
    classBody: "submitBody",
    classname: "submit",
  },
];
