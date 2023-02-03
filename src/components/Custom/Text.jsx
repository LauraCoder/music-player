import { Text as NativeText, StyleSheet } from 'react-native'
import theme from '../../theme'

const Text = ({ style, subheading, heading, playlistTitleActive, playlistTitle, light, dark, white, ...props }) => {
  const textStyle = [
    styles.body,
    subheading && styles.subheading,
    heading && styles.heading,
    playlistTitleActive && styles.playlistTitleActive,
    playlistTitle && styles.playlistTitle,
    light && styles.light,
    dark && styles.dark,
    white && styles.white,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

const styles = StyleSheet.create({
  body: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.semibold
  },
  heading: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.normal
  },
  playlistTitle: {
    position: 'absolute',
    bottom: -8,
    left: -3,
    width: 103,
    color: theme.colors.white,
    fontSize: 26,
    fontWeight: theme.fontWeights.bold,
    //textShadowColor: theme.colors.primary,
    //textShadowOffset: { width: 1, height: 1 },
    //textShadowRadius: 3
  },
  playlistTitleActive: {
    position: 'absolute',
    bottom: -10,
    left: -3,
    width: 123,
    color: theme.colors.white,
    fontSize: 30,
    fontWeight: theme.fontWeights.bold,
    //textShadowColor: theme.colors.primary,
    //textShadowOffset: { width: 1, height: 1 },
    //textShadowRadius: 3
  },
  light: {
    color: theme.colors.textSecondary
  },
  dark: {
    color: theme.colors.textPrimary
  },
  white: {
    color: theme.colors.white
  }
})

export default Text