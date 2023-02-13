import { View, StyleSheet } from 'react-native'

import theme from '../../theme'
import Icon from '../Custom/Icon'
import Text from '../Custom/Text'

const AppBottomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollRow}>
        <Icon
          lg
          light
          iconName='chevron-down'
        />
      </View>
      <View style={styles.currentlyPlayingRow}>
        <View style={styles.songDetails}>
          <Text subheading white style={{ marginBottom: -2 }}>
            Song title
          </Text>
          <Text subheading dark>
            Artist name
          </Text>
        </View>
        <View style={styles.controls}>
          <Icon
            ionicons
            lg
            iconName='play'
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    height: 120,
    paddingTop: 36
  },
  scrollRow: {
    width: '100%',
    height: 36,
    backgroundColor: theme.colors.backgroundPrimary,
    position: 'absolute',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  currentlyPlayingRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.paddings.lg,
    paddingRight: theme.paddings.lg,
  },
  songDetails: {
    flex: 0.7,
    flexDirection: 'column'
  },
  controls: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})

export default AppBottomBar