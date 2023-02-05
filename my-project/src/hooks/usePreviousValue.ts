import React from "react";

const usePreviousValue = (value: any) => {
  const currenValue = React.useRef(value);
  const previousValue = React.useRef();

  if (currenValue.current !== value) {
    previousValue.current = currenValue.current;
    currenValue.current = value;
  }

  return previousValue.current;
};

export default usePreviousValue;
