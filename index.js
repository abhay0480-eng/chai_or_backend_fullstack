
import 'dotenv/config' 
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const songData = [
    {
        "id": 13527,
        "v_code": "rhatxcmcqaywqpdvprdlti",
        "i_user_id": 566,
        "i_platform_id": 0,
        "i_playlist_id": 1088,
        "t_song_id": "-K777FAapx0",
        "t_song_link": "https://music.youtube.com/watch?v=-K777FAapx0",
        "t_absolute_link": null,
        "t_title": "Bina Maahi | Nusrat Fateh Ali Khan Ft. A1 MelodyMaster | official | Hi-Tech Music",
        "t_image": "https://i.ytimg.com/vi/-K777FAapx0/mqdefault.jpg",
        "t_thumb_image": "https://i.ytimg.com/vi/-K777FAapx0/mqdefault.jpg",
        "i_artist_id": null,
        "i_album_id": null,
        "i_artist_followers": null,
        "t_genres": null,
        "t_moods": null,
        "i_follower": 0,
        "t_country": null,
        "i_duration": 326000,
        "d_release_date": "2018-10-31",
        "i_year": 2018,
        "e_platform": "Youtube Music",
        "e_is_replica": "No",
        "i_share_count": 0,
        "i_like_count": 0,
        "v_track_id": "zxdfaqb2n7r3o3",
        "i_upload_count": 0,
        "i_play_count": 0,
        "t_lyrics": null,
        "v_acousticness": 0,
        "v_danceability": 0,
        "v_energy": 0,
        "v_instrumentalness": 0,
        "v_spectral": 0,
        "v_tempo": 0,
        "i_valence": 0,
        "v_pitches": 0,
        "v_music_notes": null,
        "is_shared": 0,
        "i_file_type": "unknown",
        "deleted_at": null,
        "is_global": false,
        "embed_link": "https://www.youtube.com/embed/-K777FAapx0",
        "regions": [],
        "sources": null,
        "play_count": 0,
        "listener_count": 0,
        "like_count": 0,
        "is_liked": false,
        "artistlist": "",
        "albumlist": "",
        "i_duration_display": "05:26",
        "t_image_path": "https://i.ytimg.com/vi/-K777FAapx0/mqdefault.jpg",
        "i_year_display": 2018,
        "t_genres_display": "",
        "listner_count": 0,
        "is_recommended": false,
        "type": "song"
    }
]
  res.send(songData)
})

app.get('/abhay', (req,res)=>{
    res.send("Hello Abhay")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})