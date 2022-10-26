import { FC } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  Container,
  Button,
  ButtonsWrapper,
  InputWrapper,
  Input,
} from './styles';

export const ChatFooter: FC = () => {
  return (
    <Container>
      <ButtonsWrapper>
        <Button>
          <CloseRoundedIcon />
        </Button>
        <Button>
          <MoodRoundedIcon />
        </Button>
      </ButtonsWrapper>
      <InputWrapper>
        <Input type="text" placeholder="Mensagem" />
      </InputWrapper>
      <Button>
        <SendRoundedIcon />
      </Button>
    </Container>
  );
};
