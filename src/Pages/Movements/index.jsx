import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import Container from './styles';
import Input from '../../Components/Input';
import InputButton from '../../Components/InputButton';
import UserContext from '../../contexts/userContext';

export default function Movements() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginResponse } = useContext(UserContext);
  const { state } = location;
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const authorization = {
    headers: {
      Authorization: `Bearer ${loginResponse.token}`,
    },
  };
  const body = {
    value,
    description,
    isOutput: state.isOutput,
    date: dayjs().format('DD/MM'),
  };
  function sendToServer(e) {
    e.preventDefault();
    const promise = axios.post('http://localhost:5000/movements', body, authorization);
    console.log(body);
    promise.then(() => navigate('/statement'));
    promise.catch((error) => alert(error.response.data));
  }
  return (
    <Container>
      <h1>{state.isOutput ? 'Nova saída' : 'Nova entrada'}</h1>
      <form onSubmit={sendToServer}>
        <Input type="number" placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} required />
        <Input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <InputButton>{state.isOutput ? 'Salvar saída' : 'Salvar entrada'}</InputButton>
      </form>
    </Container>
  );
}
