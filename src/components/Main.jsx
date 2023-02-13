import { useRef } from 'react'
import { StyleSheet, View, DrawerLayoutAndroid } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

//import AppBottomBar from './AppBarBottom'
//import AppTopBar from './AppBarTop/AppBarTop'
import BurgerMenu from './BurgerMenu'
import Login from './Login'
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
        <Routes>
          <Route path="/" element={ <Login />} exact />
          <Route path="/playlists" element={ <PlaylistScreen />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />s
        </Routes>
      </View>
    </DrawerLayoutAndroid>
  )
}

/*
        <AppTopBar drawer={drawer} />
        <PlaylistScreen />
        <AppBottomBar />*/

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

export default Main