
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import AlbumList from '../Albums/Index'
import PlaylistList from './PlaylistList'
import { useEffect } from 'react'
//import Button from '../Custom/Button'

const PlaylistScreen = ({ token }) => {
  const [active, setActive] = useState(false)
  const [playlists, setPlaylists] = useState([])
  const [playlistsItems, setPlaylistsItems] = useState([])
  const [tracksTotal, setTracksTotal] = useState('')

  const touchableHandler = (value) => {
    setActive(value.id)
    fetchPlaylistItems(value.id)
    setTracksTotal(value.tracks.total)
  }

  const fetchPlaylists = async () => {
    fetch('https://api.spotify.com/v1/me/playlists', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json()
      )
      .then((data) => setPlaylists(data.items)
      )
  }
  useEffect(() => {
    fetchPlaylists()
  }, [])

  const fetchPlaylistItems = async (playlist_id) => {
    fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json()
      )
      .then((data) => setPlaylistsItems(data.items)
      )
  }

  return (
    <View style={styles.container}>
      <PlaylistList
        active={active}
        touchableHandler={touchableHandler}
        playlists={playlists}
      />
      <AlbumList
        playlistsItems={playlistsItems}
        activePlaylist={active}
        tracksTotal={tracksTotal}
      />
    </View>
  )
}
//Developer tool <Button title={'Refresh'} onPress={fetchPlaylists} />

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

export default PlaylistScreen