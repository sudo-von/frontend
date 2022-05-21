import { Bold, H2 } from 'src/components';

type ProfileNameProps = {
  name: string;
};

const ProfileName = ({ name }: ProfileNameProps): JSX.Element => (
  <H2>
    <Bold>{name}</Bold>
  </H2>
);

export default ProfileName;
