import { H2, Bold } from 'src/components';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps): JSX.Element => {
  return (
    <div>
      <H2>
        <Bold>{title}</Bold>
      </H2>
      {children}
    </div>
  );
};

export default Section;
