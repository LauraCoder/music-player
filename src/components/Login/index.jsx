
import { StyleSheet, View } from 'react-native'

import Button from '../Custom/Button'
import Text from '../Custom/Text'
import theme from '../../theme'

const Login = ({ promptAsync }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.heading}>
          Music Player
        </Text>
      </View>
      <View style={styles.column}>
        <Button white spotifyIcon
          title={'Login to'}
          onPress={() => {
            promptAsync()
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    paddingTop: 200,
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundSecondary
  },
  column: {
    flexDirection: 'row',
    margin: 50,
  },
  heading: {
    fontSize: 30,
    color: theme.colors.white
  }
})

export default Login