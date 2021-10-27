import { Hidden } from '@mui/material'
import { Image } from 'src/components/';

interface ProfileBackgroundProps {
    src: string;
}

const ProfileBackground = ({ src } : ProfileBackgroundProps) =>
    <Hidden only={['xs', 'sm']}>
        <Image src={src}/>
    </Hidden>

export default ProfileBackground