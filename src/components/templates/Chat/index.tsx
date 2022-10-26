import { FC } from 'react';
import { ActiveChat } from '../../organisms/ActiveChat';
import { Intro } from '../../organisms/Intro';
import { Container } from './styles';

const showIntro = false;

export const Chat: FC = () => {
  return <Container>{showIntro ? <Intro /> : <ActiveChat />}</Container>;
};
