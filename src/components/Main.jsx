import { useRef } from 'react'
import { StyleSheet, View, DrawerLayoutAndroid } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import AppBottomBar from './AppBarBottom'
import AppTopBar from './AppBarTop/AppBarTop'
import BurgerMenu from './BurgerMenu'
import PlaylistScreen from './Playlists/index'

const Main = () => {
  const drawer = useRef(null)

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={() => <BurgerMenu drawer={drawer} />}>
      <View style={styles.container}>
        <AppTopBar drawer={drawer} />
        <View style={styles.content}>
          <Routes>
            <Route path="/" element={ <PlaylistScreen />} exact />
            <Route path="/playlists" element={ <PlaylistScreen />} exact />
            <Route path="*" element={<Navigate to="/" replace />} />s
          </Routes>
        </View>
        <AppBottomBar />
      </View>
    </DrawerLayoutAndroid>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  content: {
    flex: 1,
  },
})

export default Main