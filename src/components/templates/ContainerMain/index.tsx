import { FC, ReactNode } from 'react';
import { Container } from './styles';

interface ContainerMainProps {
  children: ReactNode;
}

export const ContainerMain: FC<ContainerMainProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
