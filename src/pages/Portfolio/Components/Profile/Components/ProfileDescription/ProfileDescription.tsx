import { H5 } from 'src/components/'

interface IProfileDescription {
    children: React.ReactNode | string;
}

const ProfileDescription:React.FC<IProfileDescription> = ({ children }) =>
    <H5>{children}</H5>

export default ProfileDescription