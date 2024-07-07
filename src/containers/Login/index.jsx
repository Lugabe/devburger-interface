import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";
import Logo from "../../assets/Logo-login.svg"
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { api } from '../../services/api';

const schema = yup
  .object({
    email: yup.string().email('Deve ser um e-mail valido!').required(' O e-mail é obrigatório'),
    password: yup.string().min(6, 'Deve conter no minimo 6 números').required('Digite uma senha'),
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

  const onSubmit = async (data) => {
    const response = await api.post('/session', {
      email: data.email,
      password: data.password
    })
    console.log(response)
  }



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
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer >
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <p>
            Esqueceu a senha? <a> Clique aqui! </a>
          </p>
          <Button type="submit" red={false} normal={true} >Entrar</Button>
        </Form >
        <p>
          Não possui conta? <a> Clique aqui! </a>
        </p>
      </RightContainer>
    </Container>

  );
}
