import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'

import { playlist } from '../../../data/playlists'
import Text from '../Custom/Text'
import PlaylistItem from './PlaylistItem'
import Separator from '../Custom/Separator'

const PlaylistList = ({ active, touchableHandler }) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Text heading>My Playlists</Text>
    </View>
    <Separator />
    <FlatList
      data={playlist}
      ItemSeparatorComponent={ () => <Separator /> }
      horizontal={true}
      ListHeaderComponent={ () => <View /> }
      ListHeaderComponentStyle={{ paddingLeft: 20 }}
      ListFooterComponent={ () => <View /> }
      ListFooterComponentStyle={{ paddingLeft: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => touchableHandler(item.title)}
          activeOpacity={0.7}
        >
          <PlaylistItem
            playlistTitle={item.title}
            playlistImg={item.img}
            isActive={active === item.title ? true : false}
          />
        </TouchableOpacity>
      )}
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