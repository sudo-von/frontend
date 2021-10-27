interface ProfileNameProps {
    name: any;
}

const ProfileName = ({ name } : ProfileNameProps) =>
    <h1><b>{name}</b></h1>

export default ProfileName