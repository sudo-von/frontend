import { Small } from 'src/components';

interface ProfilePhraseProps {
    phrase: string;
}

const ProfilePhrase = ({ phrase } : ProfilePhraseProps) =>
    <Small>{phrase}</Small>

export default ProfilePhrase