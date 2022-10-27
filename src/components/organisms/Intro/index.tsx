import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { createUserRequest } from '../../../store/reducers/userSlice';
import { IntroImg } from './IntroImg';
import {
  Button,
  Container,
  ContentWrapper,
  FormWrapper,
  Input,
  Text,
  Title,
} from './styles';

export const Intro: FC = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: RootState) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreate = () => {
    dispatch(createUserRequest({ name }));
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        handleCreate();
      }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [name, email]);

  return (
    <Container>
      {id === '' ? (
        <ContentWrapper>
          <Text>Primeira vez aqui?</Text>
          <Text>Aproveite para se cadastrar!</Text>
          <FormWrapper>
            <Input
              type="text"
              placeholder="Qual é o seu nome?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Qual é o seu e-mail?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormWrapper>
          <Button onClick={handleCreate}>Cadastrar</Button>
        </ContentWrapper>
      ) : (
        <>
          <IntroImg />
          <Title>Totvs Chat</Title>
          <Text>
            O Totvs chat conecta ao seu telefone para sincronizar suas
            mensagens.
            <br />
            Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.
          </Text>
        </>
      )}
    </Container>
  );
};
