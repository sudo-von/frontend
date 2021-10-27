import { Small } from 'src/components';

interface IProfilePhrase {
    phrase: string;
}

const ProfilePhrase:React.FC<IProfilePhrase> = ({ phrase }) =>
    <Small>{phrase}</Small>

export default ProfilePhrase