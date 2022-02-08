import { Bold } from 'src/components';

type ProfileNameProps = {
  name: string;
};

const ProfileName = ({ name }: ProfileNameProps): JSX.Element => (
  <h1>
    <Bold>{name}</Bold>
  </h1>
);

export default ProfileName;
