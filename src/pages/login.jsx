import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Card = styled.div`
  width: 400px;
  padding: 32px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const Title = styled.h1`
  color: #4d4d4d;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <Container>
      <Card>
        <Title>Vamos Começar!</Title>
        <Form onSubmit={handleLogin}>
          <InputContainer>
            <AccountCircle style={{ marginRight: '8px' }} />
            <StyledTextField
              id="name"
              label="Nome"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <EmailIcon style={{ marginRight: '8px' }} />
            <StyledTextField
              id="email"
              label="Endereço E-mail"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <LockIcon style={{ marginRight: '8px' }} />
            <StyledTextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
            Login
          </Button>
        </Form>
        <Link to="/home" style={{ marginTop: '20px', display: 'block', color: '#3f51b5' }}>Ir para Home</Link>
      </Card>
    </Container>
  );
}