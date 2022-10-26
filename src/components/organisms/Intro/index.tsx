import { FC } from 'react';
import { IntroImg } from './IntroImg';
import { Container, Text, Title } from './styles';

export const Intro: FC = () => {
  return (
    <Container>
      <IntroImg />
      <Title>Totvs Chat</Title>
      <Text>
        O Totvs chat conecta ao seu telefone para sincronizar suas mensagens.
        <br />
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.
      </Text>
    </Container>
  );
};
