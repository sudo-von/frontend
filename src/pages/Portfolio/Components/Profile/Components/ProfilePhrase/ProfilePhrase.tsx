import { Small } from 'src/components';

interface ProfilePhraseProps {
  phrase: string;
}

const ProfilePhrase = ({ phrase }: ProfilePhraseProps): JSX.Element => (
  <Small>{phrase}</Small>
);

export default ProfilePhrase;
