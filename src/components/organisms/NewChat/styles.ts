import styled from 'styled-components';

export const Container = styled.div<{ show: boolean }>`
  width: 35%;
  max-width: 415px;
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? '0' : '-500px')};
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.pure};
  border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
  transition: all ease 0.3s;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 60px 16px 16px 16px;
  background-color: ${({ theme }) => theme.colors.background.green};
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  height: 40px;
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-size: 18px;
  line-height: 0.5;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.text.invert};
`;
