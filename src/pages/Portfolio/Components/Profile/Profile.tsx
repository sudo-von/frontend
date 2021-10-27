import { Grid } from '@mui/material'
import { Bold } from 'src/components';
import ProfileName from './Components/ProfileName/ProfileName'
import ProfileDescription from './Components/ProfileDescription/ProfileDescription'
import ProfilePhrase from './Components/ProfilePhrase/ProfilePhrase'
import ProfileImage from './Components/ProfileImage/ProfileImage'

const Profile:React.FC = () =>
  <Grid container direction="row" alignItems="center" style={styles.grid}>
    <Grid item xs={12} md={6}>
      <ProfileName name='Jesús Rodríguez'/>
      <ProfileDescription><Bold>Desarrollador web</Bold> y de <Bold>aplicaciones móviles</Bold></ProfileDescription>
      <ProfileDescription>Apasionado del <Bold>hacking ético</Bold></ProfileDescription>
      <ProfilePhrase phrase='“La única forma de hacer un gran trabajo, es amar lo que haces”.'/>
    </Grid>
    <Grid item md={6}>
      <ProfileImage src='https://images8.alphacoders.com/101/thumb-1920-1014794.jpg'/>
    </Grid>
  </Grid>

const styles = {
  grid: {
    marginTop: 100,
    marginBottom: 100
  }
}

export default Profile