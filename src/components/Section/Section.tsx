import { H2, Bold } from 'src/components';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps): JSX.Element => {
  return (
    <div>
      <H2>
        <Bold>{title}</Bold>
      </H2>
      <p>{children}</p>
    </div>
  );
};

export default Section;
