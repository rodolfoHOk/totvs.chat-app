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

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.background.hover};
  }
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 1.063rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;
