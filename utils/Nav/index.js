import LightDarkMode from "../../universal-components/Dark&LightMode";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Logo from "../../Assets/FOA-NEWS.png";
import SearchField from "../../universal-components/SearchFieldComponent";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();
let myDate = `${days[date.getDay()]}, ${
  months[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()}`;

export const NavArray = [
  {
    classmain: "firstLayout",
    section: [
      {
        text: "",
        classbody: "firstlayoutbodyone",
        classitemtext: "firstlayoutitemtextone",
      },
      {
        icon: FiMenu,
        details: "hambugger",
        classbody: "firstlayoutbodytwo",
        classname: "firstlayoutnametwo",
        classitem: "firstlayoutitemtwo",
      },
    ],
  },
  {
    classmain: "secondLayout",
    section: [
      {
        image: Logo,
        classbody: "secondlayoutbodyone",
        classname: "secondlayoutnameone",
        classitem: "secondlayoutitemone",
      },
    ],
  },
  {
    classmain: "thirdLayout",
    section: [
      {
        component: LightDarkMode,
        details: "ldmode",
        classbody: "thirdlayoutbodyone",
        classname: "thirdlayoutnameone",
        classitem: "thirdlayoutitemone",
      },
      {
        classbody: "thirdlayoutbodytwo",
        classname: "thirdlayoutnametwo",
        iconSet: [
          {
            link: "",
            linkicon: FaFacebookF,
            classbody: "thirdlayoutbodytwoitem",
            classname: "thirdlayoutnametwoitem",
            classitem: "thirdlayoutitemtwofacebook",
          },
          {
            link: "",
            linkicon: FaInstagram,
            classbody: "thirdlayoutbodytwoitem",
            classname: "thirdlayoutnametwoitem",
            classitem: "thirdlayoutitemtwoinstagram",
          },
          {
            link: "",
            linkicon: FaYoutube,
            classbody: "thirdlayoutbodytwoitem",
            classname: "thirdlayoutnametwoitem",
            classitem: "thirdlayoutitemtwoyoutube",
          },
          {
            link: "",
            linkicon: FaLinkedinIn,
            classbody: "thirdlayoutbodytwoitem",
            classname: "thirdlayoutnametwoitem",
            classitem: "thirdlayoutitemtwolinkedin",
          },
          {
            link: "",
            linkicon: FaTiktok,
            classbody: "thirdlayoutbodytwoitem",
            classname: "thirdlayoutnametwoitem",
            classitem: "thirdlayoutitemtwotiktok",
          },
          {
            link: "",
            linkicon: FaTwitter,
            classbody: "thirdlayoutbodytwoitem",
            classname: "thirdlayoutnametwoitem",
            classitem: "thirdlayoutitemtwotwitter",
          },
        ],
      },
      {
        icon: FaSearch,
        details: "searchicon",
        classbody: "thirdlayoutbodythree",
        classname: "thirdlayoutnamethree",
        classitem: "thirdlayoutitemthree",
      },
      {
        component: SearchField,
        details: "search",
        classbody: "thirdlayoutsearchbodythree",
        classname: "thirdlayoutsearchnamethree",
        classitem: "thirdlayoutsearchitemthree",
      },
      {
        text: myDate,
        classbody: "thirdlayoutbodyfour",
        classname: "thirdlayoutnamefour",
        classitemtext: "thirdlayoutitemtextfour",
      },
    ],
  },
];
