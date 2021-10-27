import { Grid } from '@mui/material'
import ProfileName from './Components/ProfileName/ProfileName'
import ProfileDescription from './Components/ProfileDescription/ProfileDescription'
import ProfilePhrase from './Components/ProfilePhrase/ProfilePhrase'
import ProfileBackground from './Components/ProfileBackground/ProfileBackground'

const Profile = () =>
  <Grid container direction="row" alignItems="center" style={styles.grid}>
    <Grid item xs={12} md={6}>
      <ProfileName name='Jesús Rodríguez'/>
      <ProfileDescription>Desarrollador web y de aplicaciones móviles</ProfileDescription>
      <ProfileDescription>Apasionado del hacking ético</ProfileDescription>
      <ProfilePhrase phrase='“La única forma de hacer un gran trabajo, es amar lo que haces”.'/>
    </Grid>
    <Grid item md={6}>
      <ProfileBackground src='https://images8.alphacoders.com/101/thumb-1920-1014794.jpg'/>
    </Grid>
  </Grid>

const styles = {
  grid: {
    marginTop: 100,
    marginBottom: 100
  }
}

export default Profile