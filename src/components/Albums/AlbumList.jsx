import { useState } from 'react'
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'

import { albums } from '../../../data/albums'
import theme from '../../theme'
import AlbumItem from './AlbumItem'
import Icon from '../Custom/Icon'
import Separator from '../Custom/Separator'

const AlbumList = ({ activePlaylistTitle }) => {
  const [shuffleState, setShuffleState] = useState(false)
  const activePlaylistAlbums = albums.filter(album => album.playlist === activePlaylistTitle)

  const shuffleList = (activePlaylistAlbums) => {
    let i = activePlaylistAlbums.length - 1
    for ( i ; i > 0 ; i-- ) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = activePlaylistAlbums[i]
      activePlaylistAlbums[i] = activePlaylistAlbums[j]
      activePlaylistAlbums[j] = temp
    }
    {shuffleState ? setShuffleState(false) : setShuffleState(true)}
    return activePlaylistAlbums
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginBottom: 10 }}>
        <Icon
          sm
          light
          iconName='repeat'
        />
        <TouchableOpacity onPress={() => shuffleList(albums)}>
          <Icon
            sm
            light
            iconName='shuffle'
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={activePlaylistAlbums}
        extraData={shuffleState}
        ItemSeparatorComponent={() => <Separator list />}
        renderItem={({ item }) => (
          <AlbumItem
            title={item.title}
            artist={item.artist}
            albumImg={item.img}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    paddingLeft: theme.paddings.default,
    paddingRight: theme.paddings.default
  }
})

export default AlbumList