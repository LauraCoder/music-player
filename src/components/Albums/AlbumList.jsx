import { FlatList, View, StyleSheet } from 'react-native'

import { albums } from '../../../data/albums'
import theme from '../../theme'
import AlbumItem from './AlbumItem'
import Icon from '../Custom/Icon'
import Separator from '../Custom/Separator'

const AlbumList = ({ activePlaylistTitle }) => {
  const activePlaylistAlbums = albums.filter(album => album.playlist === activePlaylistTitle)

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginBottom: 10 }}>
        <Icon
          sm
          light
          iconName='repeat'
        />
        <Icon
          sm
          light
          iconName='shuffle'
        />
      </View>
      <FlatList
        data={activePlaylistAlbums}
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