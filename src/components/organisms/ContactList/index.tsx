import { FC } from 'react';
import { Contact } from '../../molecules/Contact';
import { Container } from './styles';

const contatos = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

export const ContactList: FC = () => {
  return (
    <Container>
      {contatos.map((contato) => (
        <Contact key={contato.id} name={`Contato ${contato.id}`} />
      ))}
    </Container>
  );
};
