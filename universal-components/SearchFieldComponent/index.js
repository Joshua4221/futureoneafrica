import { InputF, InputDiv, SearchfieldDiv } from "./searchfield.style";
import { FaSearch } from "react-icons/fa";
import { withTheme } from "styled-components";

const SearchField = ({ theme, placeholder, view }) => {
  return (
    <SearchfieldDiv Color={theme}>
      <InputDiv view={view} Color={theme}>
        <InputF Color={theme} placeholder={placeholder} />
        <FaSearch className="search" />
      </InputDiv>
    </SearchfieldDiv>
  );
};

export default withTheme(SearchField);
