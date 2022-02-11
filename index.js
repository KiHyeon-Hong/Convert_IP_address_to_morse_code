import { pubToMorseCode, priToMorseCode } from './src/toMorseCode.js';

/*
private IP: 192.168.1.101
public IP: 203.249.127.43
*/

console.log(await priToMorseCode());
/*
.---- ----. ..--- .-.-.- .---- -.... ---.. .-.-.- .---- .-.-.- .---- ----- .----
*/

console.log(await priToMorseCode(true));
/*
.- -. ..- .-.-.- .- -.... -.. .-.-.- .- .-.-.- .- - .-
*/

console.log(await priToMorseCode(true, true));
/*
[
  '.-',  '-.',
  '..-', '.-.-.-',
  '.-',  '-....',
  '-..', '.-.-.-',
  '.-',  '.-.-.-',
  '.-',  '-',
  '.-'
]
*/

console.log(await priToMorseCode(false, true));
/*
[
  '.----', '----.',
  '..---', '.-.-.-',
  '.----', '-....',
  '---..', '.-.-.-',
  '.----', '.-.-.-',
  '.----', '-----',
  '.----'
]
*/

console.log(await pubToMorseCode());
/*
..--- ----- ...-- .-.-.- ..--- ....- ----. .-.-.- .---- ..--- --... .-.-.- ....- ...--
*/

console.log(await pubToMorseCode(true));
/*
..- - ...- .-.-.- ..- ....- -. .-.-.- .- ..- -... .-.-.- ....- ...-
*/

console.log(await pubToMorseCode(true, true));
/*
[
  '..-',    '-',      '...-',
  '.-.-.-', '..-',    '....-',
  '-.',     '.-.-.-', '.-',
  '..-',    '-...',   '.-.-.-',
  '....-',  '...-'
]
*/

console.log(await pubToMorseCode(false, true));
/*
[
  '..---', '-----',
  '...--', '.-.-.-',
  '..---', '....-',
  '----.', '.-.-.-',
  '.----', '..---',
  '--...', '.-.-.-',
  '....-', '...--'
]
*/
