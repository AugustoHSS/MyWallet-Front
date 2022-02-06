import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../Images/Logo.png';
import Input from '../../Components/Input';
import InputButton from '../../Components/InputButton';
import Container from './styles';

export default function signUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  function doSignUp(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não são iguais. Tente novamente.');
      return;
    }
    const request = axios.post('http://localhost:5000/sign-up', {
      name,
      email,
      password,
    });
    request.then(() => navigate('/'));
    request.catch((error) => alert(error.response.data));
  }
  return (
    <Container>
      <img src={Logo} alt="MyWallet" />
      <form onSubmit={doSignUp}>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme a senha" required />
        <InputButton>Cadastrar</InputButton>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}
