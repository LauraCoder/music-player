import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'

import Text from '../Custom/Text'
import PlaylistItem from './PlaylistItem'
import Separator from '../Custom/Separator'

const PlaylistList = ({ active, touchableHandler, playlists }) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Text heading>My Playlists</Text>
    </View>
    <Separator />
    <FlatList
      data={playlists}
      ItemSeparatorComponent={ () => <Separator /> }
      horizontal={true}
      ListHeaderComponent={ () => <View /> }
      ListHeaderComponentStyle={{ paddingLeft: 20 }}
      ListFooterComponent={ () => <View /> }
      ListFooterComponentStyle={{ paddingLeft: 20 }}
      renderItem={({ item }) => {
        const playlistImg = item.images.map(img => img.url)
        return (
          <TouchableOpacity
            onPress={() => touchableHandler(item)}
            activeOpacity={0.7}
          >
            <PlaylistItem
              playlistTitle={item.name}
              playlistId={item.id}
              playlistImg={playlistImg}
              isActive={active === item.id ? true : false}
            />
          </TouchableOpacity>
        )}
      }
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 0.42,
    marginBottom: 20,
    paddingRight: 0,
    paddingLeft: 0,
  },
  column: {
    paddingLeft: 20
  }
})

export default PlaylistList