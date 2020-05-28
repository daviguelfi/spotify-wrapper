import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums('Incubus');

albums.then(data => console.log(data.albums.map(item => console.log(item.name))));
