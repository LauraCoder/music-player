import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import theme from '../../theme'
import Icon from '../Custom/Icon'

const AppTopBar = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.columnLeft}>
        <Icon
          md
          iconName='menu'
        />
      </View>
      <View style={styles.columnRight}>
        <Icon
          md
          iconName='search'
        />
        <Icon
          md
          iconName='more-vertical'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary,
    height: 100,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
    flexDirection: 'row',
  },
  columnLeft: {
    flex: 2,
    justifyContent: 'center',
  },
  columnRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})

export default AppTopBar