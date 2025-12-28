import { useEffect, useState } from 'react'

type Track = {
  id: number
  attributes: {
    title: string
    lyrics?: string
    attachments?: { url: string }[]
  }
}

export const App = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: { 'api-key': import.meta.env.VITE_API_KEY },
    })
      .then(res => res.json())
      .then(json => setTracks(json.data as Track[]))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) return

    setSelectedTrack(null)
    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: { 'api-key': import.meta.env.VITE_API_KEY },
    })
      .then(res => res.json())
      .then(json => setSelectedTrack(json.data as Track))
  }, [selectedTrackId])

  if (tracks === null) {
    return (
      <>
        <h1>MusicFun</h1>
        <p>Loading...</p>
      </>
    )
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>MusicFun</h1>
        <p>No tracks available</p>
      </>
    )
  }

  return (
    <>
      <h1>MusicFun</h1>
      <button
        type="button"
        onClick={() => {
          setSelectedTrackId(null)
          setSelectedTrack(null)
        }}
      >
        Reset selection
      </button>
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <ul>
          {tracks.map(track => (
            <li
              key={track.id}
              style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
              onClick={() => setSelectedTrackId(track.id)}
            >
              <div>{track.attributes.title}</div>
              <audio
                src={track.attributes.attachments?.[0]?.url}
                controls
              />
            </li>
          ))}
        </ul>
        <div>
          <h2>Track details</h2>
          {selectedTrackId === null ? (
            'No track selected'
          ) : selectedTrack === null ? (
            'Loading track...'
          ) : (
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <div>
                <h4>Lyrics</h4>
                <p>{selectedTrack.attributes.lyrics}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}