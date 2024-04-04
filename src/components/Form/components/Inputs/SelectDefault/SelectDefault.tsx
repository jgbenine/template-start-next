import React from "react";

type SelectInputProps = React.InputHTMLAttributes<HTMLSelectElement> & {
  customProp?: string;
};

function SelectDefault({ id, name, ...props }: SelectInputProps) {
  return <></>;
}

export default SelectDefault;
