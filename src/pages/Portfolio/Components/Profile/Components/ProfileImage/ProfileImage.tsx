import { Image } from 'src/components/';

type ProfileImageProps = {
  src: string;
};

const ProfileImage = ({ src }: ProfileImageProps): JSX.Element => (
  <Image loading="lazy" src={src} />
);

export default ProfileImage;
