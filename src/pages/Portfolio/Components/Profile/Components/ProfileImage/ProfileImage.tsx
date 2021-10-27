import { Hidden } from '@mui/material'
import { Image } from 'src/components/';

interface IProfileImage {
    src: string;
}

const ProfileImage:React.FC<IProfileImage> = ({ src }) =>
    <Hidden only={['xs', 'sm']}>
        <Image src={src}/>
    </Hidden>

export default ProfileImage