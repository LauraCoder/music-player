import { StyleSheet, View, } from 'react-native'

import images from '../../../assets/images'
import Text from '../Custom/Text'
import Image from '../Custom/Image'

const PlaylistItem = ({ playlistTitle, playlistImg, isActive }) => (
  <View style={styles.row}>
    {isActive
      ? (
        <View>
          {playlistImg[0]
            ? <Image
              playlistImage
              active
              image={playlistImg[0]}
              style={{ marginTop: 0 }}
            />
            : <Image
              playlistImage
              noImage
              active
              style={{ marginTop: 0 }}
            />
          }
          <Text playlistTitleActive adjustsFontSizeToFit={true} numberOfLines={2} >
            {playlistTitle}
          </Text>
        </View>
      )
      : (
        <View>
          {playlistImg[0]
            ? <Image
              playlistImage
              image={playlistImg ? playlistImg[0] : images.noImage}
              style={{ marginTop: 10 }}
            />
            : <Image
              playlistImage
              noImage
              style={{ marginTop: 10 }}
            />
          }
          <Text playlistTitle adjustsFontSizeToFit={true} numberOfLines={2} >
            {playlistTitle}
          </Text>
        </View>
      )
    }
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default PlaylistItem