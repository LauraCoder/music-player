import { useState } from 'react'
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'

import theme from '../../theme'
import AlbumItem from './AlbumItem'
import Icon from '../Custom/Icon'
import Separator from '../Custom/Separator'
import Text from '../Custom/Text'

const AlbumList = ({ playlistsItems, tracksTotal }) => {
  const [shuffleState, setShuffleState] = useState(false)

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
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>
            {tracksTotal} tracks
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Icon
            sm
            light
            iconName='repeat'
          />
          <TouchableOpacity onPress={() => shuffleList(playlistsItems)}>
            <Icon
              sm
              light
              iconName='shuffle'
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={playlistsItems}
        extraData={shuffleState}
        ItemSeparatorComponent={() => <Separator list />}
        renderItem={({ item }) => {
          const itemArtists = item.track.album.artists.map(artist => artist.name)
          const itemImg = item.track.album.images.map(img => img.url)
          return (
            <AlbumItem
              title={item.track.name}
              artist={itemArtists}
              albumImg={itemImg}
            />
          )
        }
        }
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