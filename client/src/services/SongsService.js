import Api from '@/services/Api'

export default {
  getSongs (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    }) // songs is an endpoint, params: search is the key word for http://localhost:8080/#/songs?search=, and the second search is actually the search
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  postSong (song) {
    return Api().post('songs', song) // songs is an endpoint, song is the data structure
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song) // songs is an endpoint, song is the data structure
  }
}
