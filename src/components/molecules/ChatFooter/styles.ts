import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const Button = styled.div<{ show: boolean }>`
  width: ${({ show }) => (show ? '40px' : 0)};
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all ease 0.1s;
`;

export const InputWrapper = styled.div`
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  font-size: 0.938rem;
  background-color: ${({ theme }) => theme.colors.background.pure};
  color: ${({ theme }) => theme.colors.text.darkGray};
  padding-left: 15px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.gray};
  }
`;
