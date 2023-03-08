const fs = require('fs');
const ytdl = require('ytdl-core');


ytdl('https://www.youtube.com/watch?v=XqLAexu4OOE')
  .pipe(fs.createWriteStream('trailer.mp4'));