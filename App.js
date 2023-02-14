import { useEffect } from 'react'
import { NativeRouter } from 'react-router-native'
import Constants from 'expo-constants'
import { ResponseType, useAuthRequest } from 'expo-auth-session'

import Login from './src/components/Login'
import Main from './src/components/Main'
import { useState } from 'react'

const discovery = {
  authorizationEndpoint:
  'https://accounts.spotify.com/authorize',
  tokenEndpoint:
  'https://accounts.spotify.com/api/token',
}

const App = () => {
  const [token, setToken] = useState('')
  const [request, response, promptAsync] =
  useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: Constants.manifest.extra.clientId,
      scopes: [
        'playlist-read-private',
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-state',
        'user-top-read',
        'user-modify-playback-state',
        'streaming',
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

  return (
    <NativeRouter>
      {!token
        ? <Login promptAsync={promptAsync} />
        : <Main token={token} />
      }
    </NativeRouter>
  )
}

export default App