import Api from '@/services/Api'

export default {
  getSongs () {
    return Api().get('songs') // songs is an endpoint
  },
  postSong (song) {
    return Api().post('songs', song) // songs is an endpoint, song is the data structure
  }
}
