import { FC } from 'react';
import { Chat } from './components/templates/Chat';
import { Contacts } from './components/templates/Contacts';
import { ContainerMain } from './components/templates/ContainerMain';

export const App: FC = () => {
  return (
    <ContainerMain>
      <Contacts />
      <Chat />
    </ContainerMain>
  );
};
