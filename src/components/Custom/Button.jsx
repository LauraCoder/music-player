import { StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../../theme'
import Image from './Image'
import Text from './Text'
import Separator from './Separator'

const Button = ({ style, title, onPress, red, white, spotifyIcon, ...props }) => {
  const buttonStyle = [
    styles.default,
    red && styles.red,
    white && styles.white,
    spotifyIcon && styles.spotifyIcon,
    style,
  ]

  if(spotifyIcon) {
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle} activeOpacity={0.8} {...props}>
        <Text>{title}</Text>
        <Separator sm />
        <Image spotifyIcon />
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} activeOpacity={0.8} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    width: '50%',
  },
  red: {
    color: theme.colors.backgroundSecondary
  },
  white: {
    backgroundColor: theme.colors.white
  },
  spotifyIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

export default Button