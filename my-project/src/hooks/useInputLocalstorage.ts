import React from "react";

const getValueInput = <T extends string>(key: T, initialValue?: () => T) => {
  const getValue = JSON.parse(localStorage.getItem(key) as string);

  if (getValue) return getValue;

  if (typeof initialValue == "function") return initialValue();
  return getValue;
};

const useInputLocalstorage = <T extends string>(
  key: T,
  initialValue?: () => T
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [field, setField] = React.useState(getValueInput(key, initialValue));

  React.useEffect(() => {
    field && localStorage.setItem(key, JSON.stringify(field));
  }, [field]);

  return [field, setField];
};

export default useInputLocalstorage;
