
type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  customProp?: string;
};

function InputDefault({id, name, ...props}: TextInputProps) {
  return (
    <></>
  )
}

export default InputDefault

