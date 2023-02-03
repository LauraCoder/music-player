import { StyleSheet, View, } from 'react-native'

import Text from '../Custom/Text'
import Image from '../Custom/Image'

const PlaylistItem = ({ playlistTitle, playlistImg, isActive }) => {
  return (
    <View style={styles.row}>
      {isActive
        ? (
          <View>
            <Image
              playlistImageActive
              image={playlistImg}
              style={{ marginTop: 0 }}
            />
            <Text playlistTitleActive adjustsFontSizeToFit={true} numberOfLines={2} >
              {playlistTitle}
            </Text>
          </View>
        )
        : (
          <View>
            <Image
              playlistImage
              image={playlistImg}
              style={{ marginTop: 10 }}
            />
            <Text playlistTitle adjustsFontSizeToFit={true} numberOfLines={2} >
              {playlistTitle}
            </Text>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default PlaylistItem