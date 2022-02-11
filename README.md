## Convert_IP_address_to_morse_code

### 개요

- 사용자의 공인 IP 주소와 사설 IP 주소를 모스 부호로 변경하여 반환한다.

### Install

```bash
git clone https://github.com/KiHyeon-Hong/Convert_IP_address_to_morse_code.git
cd Convert_IP_address_to_morse_code
npm i
```

### API

#### await priToMorseCode(short, arr)

- short: 모스 부호 간략 기호 여부 (true, false)
- arr: 배열 형식 반환 여부 (true, false)

```javascript
import { pubToMorseCode, priToMorseCode } from './src/toMorseCode.js';

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
```

#### await pubToMorseCode(short, arr)

- short: 모스 부호 간략 기호 여부 (true, false)
- arr: 배열 형식 반환 여부 (true, false)

```javascript
import { pubToMorseCode, priToMorseCode } from './src/toMorseCode.js';

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
```
