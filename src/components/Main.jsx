import { StyleSheet, View } from 'react-native'

import AppBottomBar from './AppBarBottom/AppBarBottom'
import AppTopBar from './AppBarTop/AppBarTop'
import PlaylistScreen from './Playlists/index'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppTopBar />
      <PlaylistScreen />
      <AppBottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

export default Main