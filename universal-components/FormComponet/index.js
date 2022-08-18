import React from "react";
import { withTheme } from "styled-components";
import { FormDiv } from "./form.style";

const Form = ({ formArray, theme }) => {
  return (
    <FormDiv color={theme}>
      {formArray?.map((item, key) => (
        <div key={key} className={`${item.classBody}`}>
          {item.type === "submit" ? (
            <input
              className={`${item.classname}`}
              type={item.type}
              value={item.value}
            />
          ) : (
            <div className={`${item.classitem}`}>
              <item.icon className={`${item.classicon}`} />
              <input
                className={`${item.classname}`}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                onChange={item.onchange}
              />
            </div>
          )}
        </div>
      ))}
    </FormDiv>
  );
};

export default withTheme(Form);
