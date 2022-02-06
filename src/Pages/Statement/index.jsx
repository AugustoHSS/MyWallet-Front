import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Statements, MovementButton, ButtonContainer, Header,
  WithoutMovements, Date, Description, Value, Movement, Balance, BalanceValue,
} from './styles';
import UserContext from '../../contexts/userContext';

export default function Statement() {
  const navigate = useNavigate();
  const { loginResponse } = useContext(UserContext);
  const [statements, setStatements] = useState([]);
  const authorization = {
    headers: {
      Authorization: `Bearer ${loginResponse.token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get('http://localhost:5000/statement', authorization);
    promise.then((answer) => { setStatements(answer.data); });
  }, []);

  function printStatement() {
    let balance = 0;
    return (
      <>
        <div>
          {statements.map((statement) => {
            if (statement.isOutput) {
              balance -= statement.value;
            } else {
              balance += statement.value;
            }
            return (
              <Movement>
                <div>
                  <Date>{statement.date}</Date>
                  <Description>{statement.description}</Description>
                </div>
                <Value isOutput={statement.isOutput}>{statement.value.toFixed(2)}</Value>
              </Movement>

            );
          })}
        </div>
        <Balance>
          <p>SALDO</p>
          <BalanceValue isNegative={balance <= 0}>{Math.abs(balance).toFixed(2)}</BalanceValue>
        </Balance>
      </>
    );
  }

  return (
    <Container>
      <Header>
        <h1>{`Olá, ${loginResponse.name}`}</h1>
        <ion-icon name="exit-outline" />
      </Header>
      <Statements>
        {statements.length === 0 ? (
          <WithoutMovements>
            <p>Não há registros de entrada ou saída</p>
          </WithoutMovements>
        ) : printStatement() }
      </Statements>
      <ButtonContainer>
        <MovementButton onClick={() => (navigate('/movements', {
          state: { isOutput: false },
        }))}
        >
          <ion-icon name="add-circle-outline" />
          <p>Nova entrada</p>
        </MovementButton>
        <MovementButton onClick={() => (navigate('/movements', {
          state: { isOutput: true },
        }))}
        >
          <ion-icon name="remove-circle-outline" />
          <p>Nova saída</p>
        </MovementButton>
      </ButtonContainer>
    </Container>
  );
}
