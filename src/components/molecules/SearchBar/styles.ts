import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-color: 1px solid ${({ theme }) => theme.colors.border.pure};
  padding: 4px 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  background-color: transparent;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.text.primary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.gray};
  }
`;
