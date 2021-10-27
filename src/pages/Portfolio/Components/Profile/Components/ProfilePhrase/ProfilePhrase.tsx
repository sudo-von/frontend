interface ProfilePhraseProps {
    phrase: string;
}

const ProfilePhrase = ({ phrase } : ProfilePhraseProps) =>
    <small>{phrase}</small>

export default ProfilePhrase