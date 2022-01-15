import { Hidden } from '@mui/material';
import { Image } from 'src/components/';

interface ProfileImageProps {
  src: string;
}

const ProfileImage = ({ src }: ProfileImageProps): JSX.Element => (
  <Hidden only={['xs', 'sm']}>
    <Image src={src} />
  </Hidden>
);

export default ProfileImage;
