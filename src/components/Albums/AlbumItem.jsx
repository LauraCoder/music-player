import { StyleSheet, View } from 'react-native'

import Image from '../Custom/Image'
import Text from '../Custom/Text'

const AlbumItem = ({ title, artist, albumImg }) => (
  <View style={styles.row}>
    <Image
      albumImage
      image={albumImg[0]}
    />
    <View style={styles.column}>
      <View style={styles.row}>
        <Text subheading dark >
          {title}
        </Text>
      </View>
      <View style={styles.row}>
        <Text subheading light>
          {artist}
        </Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 27,
    justifyContent: 'center',
  },
})

export default AlbumItem