import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../Images/Logo.png';
import Input from '../../Components/Input';
import InputButton from '../../Components/InputButton';
import Container from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function doLogin(e) {
    e.preventDefault();
    const request = axios.post('http://localhost:5000/sign-in', {
      email,
      password,
    });
    request.then(() => navigate('/statement'));
    request.catch((error) => alert(error.response.data));
  }
  return (
    <Container>
      <img src={Logo} alt="MyWallet" />
      <form onSubmit={doLogin}>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <InputButton type="submit">Entrar</InputButton>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}
