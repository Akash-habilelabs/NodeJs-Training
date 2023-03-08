/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
const add=(a,b)=>{
  return a+b;
}

const fs = require('fs');
const ytdl = require('ytdl-core');


ytdl('https://www.youtube.com/watch?v=XqLAexu4OOE')
  .pipe(fs.createWriteStream('trailer.mp4'));