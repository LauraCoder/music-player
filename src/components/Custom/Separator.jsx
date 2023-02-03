import { View as NativeView, StyleSheet } from 'react-native'
import theme from '../../theme'

const Separator = ({ style, md, lg, list }) => {
  const separatorStyle = [
    styles.default,
    md && styles.md,
    lg && styles.lg,
    style,
  ]

  if(list) return (
    <NativeView style={styles.listSeparator} >
      <NativeView style={styles.listSeparatorLine} />
    </NativeView>
  )

  return <NativeView style={separatorStyle} />
}

const styles = StyleSheet.create({
  default: {
    height: 10,
    width: 15
  },
  md: {
    height: 15
  },
  lg: {
    height: 20
  },
  listSeparator: {
    height: 30,
    justifyContent: 'center'
  },
  listSeparatorLine: {
    height: 1,
    backgroundColor: theme.colors.border
  }
})

export default Separator