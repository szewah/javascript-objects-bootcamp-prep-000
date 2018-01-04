var playlist = {artist :'name', song: 'title'}
function updatePlaylist(obj, key, value) {
 obj[key] = value 
 return obj
}

var newPlaylist = Object.assign({}, obj)