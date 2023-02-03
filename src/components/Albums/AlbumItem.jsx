import { StyleSheet, View } from 'react-native'

import Image from '../Custom/Image'
import Text from '../Custom/Text'

const AlbumItem = ({ title, artist, albumImg }) => {
  return (
    <View style={styles.row}>
      <Image
        albumImage
        image={albumImg}
      />
      <View style={styles.column}>
        <Text subheading dark style={{ marginBottom: -2 }}>
          {title}
        </Text>
        <Text subheading light>
          {artist}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    marginLeft: 27,
    justifyContent: 'center',
  },
})

export default AlbumItem