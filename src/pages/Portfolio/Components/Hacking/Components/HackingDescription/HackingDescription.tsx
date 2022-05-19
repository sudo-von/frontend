import { Bold, H2 } from 'src/components';
import { handleStyles } from './HackingDescription.styles';

export type HackingDescriptionProps = {
  textAlign: 'left' | 'justify' | 'right' | 'center';
};

const HackingDescription = ({
  textAlign,
}: HackingDescriptionProps): JSX.Element => {
  const styles = handleStyles(textAlign);
  return (
    <div>
      <H2>
        <Bold>Hacking ético</Bold>
      </H2>
      <p style={styles.p}>
        Durante 3 años he participado en eventos de seguridad informática a
        nivel nacional obteniendo los primeros lugares al vulnerar sistemas en
        en ambientes controlados contando también con dos participaciones en la
        televisión.
      </p>
      <p style={styles.p}>
        Semanalmente participo en multiples eventos en línea compitiendo contra
        cientos de equipos, además, redacto los pasos a seguir para resolver
        este tipo de desafíosy así contribuir a la comunidad.
      </p>
      <p style={styles.p}>
        Orgullosamente fui miembro del equipo de ciberseguridad&nbsp;
        <a
          href="https://mobile.twitter.com/mayasteam"
          target="_blank"
          rel="noreferrer"
        >
          Mayas
        </a>
        el cual es el representante de México en competencias de nivel mundial.
      </p>
    </div>
  );
};

export default HackingDescription;
