import { StyleSheet, View, } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../theme'
import Text from '../Custom/Text'
//import AppBarTab from './AppBarTab'

const BurgerMenu = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text heading style={{ padding: 16 }}>Music Player</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    backgroundColor: theme.colors.white,
    marginTop: 20,
  },
  subcontent: {
    paddingLeft: 25,
  }
})

export default BurgerMenu

/*
<AppBarTab link='/' onPress={() => drawer.current.closeDrawer()}>
    Link
</AppBarTab>*/