import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IFormLogin, defaultValues } from './Types';
import { Column, Conteiner, Imagem, Tela, Title, Wrapper } from "./Styles";

import img_login from "../assets/login.png";
import Button from "../components/button/Index";
import Input from "../components/input/Index";

const schema = yup
  .object({
    email: yup.string().email("Email Inválido").required("Campo Obrigatorio"),
    password: yup.string().min(6,"Minimo 6 caracteres").required("Campo Obrigatorio"),
  })
  .required()

const App = () => {
  const {control, formState:{errors, isValid} } = useForm<IFormLogin>({resolver: yupResolver(schema), mode: 'onBlur', reValidateMode: 'onChange', defaultValues});

  return (
    <Wrapper>
      <Conteiner>
            <Tela>
                <Imagem><img src={img_login} /></Imagem>
                <Column>
                    <Title>Login</Title>
                    <Input name="email" placeholder="Email" control={control} errorMessage={errors.email?.message} isValid={isValid}/>
                    <Input name="password" type="password" placeholder="Senha" control={control} errorMessage={errors.password?.message} isValid={isValid}/>
                    <Button title="Entrar" isValid = {isValid}/>
                </Column>
            </Tela>
        </Conteiner>
    </Wrapper>
)}

export default App
