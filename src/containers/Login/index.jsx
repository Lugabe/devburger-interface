import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";
import Logo from "../../assets/Logo-login.svg"
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.number().min(6).required(),
  })
  .required()


export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)



  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo hamburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
          </InputContainer>
          <p>
            Esqueceu a senha? <a> Clique aqui! </a>
          </p>
          <Button type="submit" >Entrar</Button>
        </Form >
        <p>
          Não possui conta? <a> Clique aqui! </a>
        </p>
      </RightContainer>
    </Container>

  );
}
