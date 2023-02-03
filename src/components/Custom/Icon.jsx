import { StyleSheet } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import theme from '../../theme'

const Icon = ({ style, iconName, sm, md, lg, light, ionicons }) => {
  const iconStyle = [
    styles.defaultIcon,
    light && styles.light,
    sm && styles.sm,
    md && styles.md,
    lg && styles.lg,
    style,
  ]

  //Feather icons are used as a default set as icons. Replace the ICONSETVAR if there is a need to use another set
  if(ionicons) return <IconIonicons
    name={iconName}
    size={iconStyle}
    style={iconStyle}
  />

  return <IconFeather
    name={iconName}
    size={iconStyle}
    style={iconStyle}
  />
}

const styles = StyleSheet.create({
  defaultIcon: {
    color: theme.colors.textPrimary,
    marginRight: 15,
    marginLeft: 15
  },
  light: {
    color: theme.colors.textSecondary
  },
  sm: {
    fontSize: 21
  },
  md: {
    fontSize: 25
  },
  lg: {
    fontSize: 30
  }
})

export default Icon