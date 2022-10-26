import { FC } from 'react';
import { Image } from './styles';

interface AvatarProps {
  alt: string;
}

export const Avatar: FC<AvatarProps> = ({ alt }) => {
  return (
    <Image src="https://www.w3schools.com/howto/img_avatar2.png" alt={alt} />
  );
};
