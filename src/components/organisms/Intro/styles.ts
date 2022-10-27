import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.chat};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 6px solid ${({ theme }) => theme.colors.border.chat};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  color: #525252;
  margin-top: 30px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 16px;
  line-height: 1.7;
`;

export const ContentWrapper = styled.div`
  text-align: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 375px;
  margin: 12px 0;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  outline: 0;
  border: 0;
  border-radius: 8px;
`;

export const Button = styled.button`
  width: 375px;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.border.chat};
  color: ${({ theme }) => theme.colors.background.pure};
  font-weight: bold;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.background.green};
  }
`;
