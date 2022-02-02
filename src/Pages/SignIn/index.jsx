import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import Input from '../../Components/Input';
import InputButton from '../../Components/InputButton';
import Container from './styles';

export default function SignIn() {
  function login() {
    alert('feito o login');
  }
  return (
    <Container>
      <img src={Logo} alt="MyWallet" />
      <form onSubmit={login}>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <InputButton type="submit">Entrar</InputButton>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}
