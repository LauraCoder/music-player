
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import AlbumList from '../Albums/AlbumList'
import PlaylistList from './PlaylistList'

const PlaylistScreen = () => {
  const [active, setActive] = useState(false)

  const touchableHandler = (value) => setActive(value)

  return (
    <View style={styles.container}>
      <PlaylistList
        active={active}
        touchableHandler={touchableHandler}
      />
      <AlbumList
        activePlaylistTitle={active}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

export default PlaylistScreen