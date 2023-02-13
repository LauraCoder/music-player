
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { ResponseType, useAuthRequest } from 'expo-auth-session'
import { useNavigate } from 'react-router-native'

import Button from '../Custom/Button'
import Text from '../Custom/Text'
import theme from '../../theme'
import { useEffect, useState } from 'react'

const discovery = {
  authorizationEndpoint:
  'https://accounts.spotify.com/authorize',
  tokenEndpoint:
  'https://accounts.spotify.com/api/token',
}

const Login = () => {
  let navigate = useNavigate()
  const [token, setToken] = useState('')
  const [request, response, promptAsync] =
  useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: Constants.manifest.extra.clientId,
      scopes: [/*
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-state',
        'user-top-read',
        'user-modify-playback-state',
        'streaming',*/
        'user-read-email',
        'user-read-private',
      ],
      // In order to follow the 'Authorization Code Flow'
      // to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: Constants.manifest.extra.redirectUri,
    },
    discovery
  )

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params
      setToken(access_token)
    }
  }, [response])

  useEffect(() => {
    if (token) {
      navigate('/playlists')
    }
  })

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