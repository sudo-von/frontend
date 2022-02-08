import { Icon as IconComponent } from 'src/components';
import { styles } from 'src/components/Navbar/Components/SocialNetworks/SocialNetworks.styles';
import { Icon, iconList } from 'src/components/Navbar/data';

const SocialNetworks = () => {
  return (
    <>
      {iconList.map((icon: Icon) => (
        <a
          href={icon.href}
          target="_blank"
          style={styles.a}
          title={icon.name}
          key={icon.name}
          rel="noreferrer"
        >
          <IconComponent size="30" svg={icon.svg} />
        </a>
      ))}
    </>
  );
};

export default SocialNetworks;
