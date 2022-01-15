import { H5 } from 'src/components';

interface ProfileDescriptionProps {
  children: React.ReactNode;
}

const ProfileDescription = ({
  children,
}: ProfileDescriptionProps): JSX.Element => <H5>{children}</H5>;

export default ProfileDescription;
