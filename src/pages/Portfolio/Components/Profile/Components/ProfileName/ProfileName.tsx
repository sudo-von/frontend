import { Bold } from 'src/components';

interface ProfileNameProps {
    name: any;
}

const ProfileName = ({ name } : ProfileNameProps) =>
    <h1><Bold>{name}</Bold></h1>

export default ProfileName