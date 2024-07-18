import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";
import Logo from "../../assets/Logo-login.svg"
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { api } from '../../services/api';
import { toast } from 'react-toastify';


const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório!'),
    email: yup.string().email('Deve ser um e-mail valido!').required(' O e-mail é obrigatório'),
    password: yup.string().min(6, 'Deve conter no minimo 6 números').required('Digite uma senha'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser as mesmas.').required('Digite uma senha')
  })
  .required()


export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password
      }, {

        validateStatus: () => true,
      })

      if (status === 200 || status === 201) {
        toast.success("Conta criada com sucesso!")
      } else if (status === 409) {
        toast.error("O e-mail já está cadastrado.")
      } else {
        throw new Error();
      }


    } catch (error) {
      toast.error("😥Falha no sistema! Tente novamente!")
    }

  }


  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo hamburguer" />
      </LeftContainer>
      <RightContainer>
        <Title purple={true}>
          Criando Conta...
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer >
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer >
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer >
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit" red={false} normal={true} >Criar Conta</Button>
        </Form >
        <p>
          Já possui conta? <a> Clique aqui! </a>
        </p>
      </RightContainer>
    </Container>

  );
}
