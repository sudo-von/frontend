import { Bold } from 'src/components';

interface ProfileNameProps {
  name: string;
}

const ProfileName = ({ name }: ProfileNameProps): JSX.Element => (
  <h1>
    <Bold>{name}</Bold>
  </h1>
);

export default ProfileName;
