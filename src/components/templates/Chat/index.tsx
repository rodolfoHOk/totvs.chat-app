import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ActiveChat } from '../../organisms/ActiveChat';
import { Intro } from '../../organisms/Intro';
import { Container } from './styles';

export const Chat: FC = () => {
  const { id } = useSelector((state: RootState) => state.user);
  const { activeContact } = useSelector((state: RootState) => state.contact);

  const showActiveChat = id && activeContact;

  return <Container>{showActiveChat ? <ActiveChat /> : <Intro />}</Container>;
};
