import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import Input from '../../Components/Input';
import InputButton from '../../Components/InputButton';
import Container from './styles';

export default function SignUp() {
  const navigate = useNavigate();
  function signUp() {
    alert('cadastro feito com sucesso');
    navigate('/');
  }
  return (
    <Container>
      <img src={Logo} alt="MyWallet" />
      <form onSubmit={signUp}>
        <Input type="text" placeholder="Nome" required />
        <Input type="email" placeholder="E-mail" required />
        <Input type="password" placeholder="Senha" required />
        <Input type="password" placeholder="Confirme a senha" required />
        <InputButton>Cadastrar</InputButton>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}
