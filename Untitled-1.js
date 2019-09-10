const fetchAllAlbums = async () => {
    const response = await fetch('https://rallycoding.herokuapp/api/music_albums')
    const json = await response.json()

    console.log("TCL: fetchAllAlbums -> json", json)
}
fetchAllAlbums();