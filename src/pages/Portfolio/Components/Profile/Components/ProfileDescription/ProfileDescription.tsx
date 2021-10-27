import { H5 } from 'src/components/'

interface ProfileDescriptionProps {
    children: any;
}

const ProfileDescription = ({ children } : ProfileDescriptionProps) =>
    <H5>{children}</H5>

export default ProfileDescription