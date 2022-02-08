import { ReactComponent as Linkedin } from 'src/assets/svg/navbar/linkedin.svg';
import { ReactComponent as Twitter } from 'src/assets/svg/navbar/twitter.svg';
import { ReactComponent as Github } from 'src/assets/svg/navbar/github.svg';

export type Icon = {
  name: string;
  href: string;
  svg: React.ReactNode;
};

export const iconList: Icon[] = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/jes%C3%BAs-%C3%A1ngel-rodr%C3%ADguez-mart%C3%ADnez-84991a1b4/',
    svg: <Linkedin />,
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com/sudo_von',
    svg: <Twitter />,
  },
  {
    name: 'Github',
    href: 'https://github.com/sudo-von',
    svg: <Github />,
  },
];
