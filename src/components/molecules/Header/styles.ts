import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
