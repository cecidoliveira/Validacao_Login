import { ButtonContainer } from "./ButtonStyles";
import { IButtonProps } from "./Types";

const Button = ({ title, isValid }: IButtonProps) => {
  return <ButtonContainer onClick={()=> console.log("Click -> Entrar")} disabled={!isValid}>{title}</ButtonContainer>;
};

export default Button;