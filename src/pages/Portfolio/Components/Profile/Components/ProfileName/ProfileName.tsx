import { Bold } from 'src/components';

interface IProfileName {
    name: string;
}

const ProfileName:React.FC<IProfileName> = ({ name }) =>
    <h1><Bold>{name}</Bold></h1>

export default ProfileName