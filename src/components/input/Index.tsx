import { Controller } from "react-hook-form";
import { InputContainer, MenssageErro } from "./InputStyles";
import { IInputProps } from "./Types";

const Input = ({ control, name, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
    <InputContainer>
      <Controller
        control= {control}
        name= {name}
        render={({ field: {onChange, onBlur, value, ref} }) => <input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />}
      />
    </InputContainer>
    {errorMessage ? <MenssageErro>{errorMessage}</MenssageErro>: null}
    </>
  );
};

export default Input;
