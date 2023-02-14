import { Image as NativeImage, StyleSheet } from 'react-native'
import theme from '../../theme'
import images from '../../../assets/images'

const Image = ({ style, image, noImage, albumImage, playlistImage, active, spotifyIcon }) => {
  const imageStyle = [
    styles.defaultImage,
    albumImage && styles.albumImage,
    playlistImage && styles.playlistImage,
    active && styles.active,
    spotifyIcon && styles.spotifyIcon,
    style,
  ]

  if (noImage) return <NativeImage style={imageStyle} source={images.noImage} />
  if (spotifyIcon) return <NativeImage style={imageStyle} source={images.spotifyLogo} />

  return <NativeImage style={imageStyle} source={{ uri: `${image}` }} />
}

const styles = StyleSheet.create({
  defaultImage: {
    //borderRadius: theme.borders.borderRadius,
    height: 100,
    width: 100
  },
  albumImage: {
    //borderRadius: theme.borders.borderRadius,
    height: 85,
    width: 85
  },
  playlistImage: {
    borderRadius: theme.borders.borderRadius,
    width: 100,
    height: 120,
  },
  active: {
    width: 120,
    height: 140,
  },
  spotifyIcon: {
    width: 100,
    height: 30,
  }
})

export default Image