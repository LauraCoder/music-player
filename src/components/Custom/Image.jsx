import { Image as NativeImage, StyleSheet } from 'react-native'
//import Icon from 'react-native-vector-icons/Ionicons'
import theme from '../../theme'
import images from '../../../assets/images'

const Image = ({ style, image, albumImage, playlistImage, playlistImageActive, spotifyIcon }) => {
  const imageStyle = [
    styles.defaultImage,
    albumImage && styles.albumImage,
    playlistImage && styles.playlistImage,
    playlistImageActive && styles.playlistImageActive,
    spotifyIcon && styles.spotifyIcon,
    style,
  ]

  //if(image) return <Icon name='image-outline' style={styles.noImage} />
  if (spotifyIcon) return <NativeImage style={imageStyle} source={images.spotifyLogo} />

  return <NativeImage style={imageStyle} source={{ uri: `${image}` }} />
}

const styles = StyleSheet.create({
  defaultImage: {
    borderRadius: theme.borders.borderRadius,
    height: 100,
    width: 100
  },
  albumImage: {
    borderRadius: theme.borders.borderRadius,
    height: 85,
    width: 85
  },
  playlistImage: {
    borderRadius: theme.borders.borderRadius,
    width: 100,
    height: 120,
  },
  playlistImageActive: {
    borderRadius: theme.borders.borderRadius,
    width: 120,
    height: 140,
  },
  spotifyIcon: {
    width: 100,
    height: 30,
  }
  /*noImage: {
    borderRadius: theme.borders.borderRadius,
    height: 183,
    maxHeight: 183,
    textAlign: 'center',
    paddingTop: 60,
    fontSize: 40,
    color: theme.colors.secondary
  },*/
})

export default Image