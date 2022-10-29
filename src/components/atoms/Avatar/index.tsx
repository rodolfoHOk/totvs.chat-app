import { FC } from 'react';
import { Image } from './styles';
import avatarImg from '../../../assets/avatar.jpg';

interface AvatarProps {
  url: string;
  alt: string;
}

export const Avatar: FC<AvatarProps> = ({ url, alt }) => {
  return <Image src={url ? url : avatarImg} alt={alt} />;
};
