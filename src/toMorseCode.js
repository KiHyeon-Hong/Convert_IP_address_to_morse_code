import publicIp from 'public-ip';
import ip from 'ip';

async function getPublicIP() {
  return await publicIp.v4();
}

async function getPrivateIP() {
  return ip.address();
}

function toShortMorse(ip) {
  const morse = {
    0: '-',
    1: '.-',
    2: '..-',
    3: '...-',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '-...',
    8: '-..',
    9: '-.',
    '.': '.-.-.-',
  };

  return ip.split('').map((v) => {
    return morse[v];
  });
}

function toLongMorse(ip) {
  const morse = {
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    '.': '.-.-.-',
  };

  return ip.split('').map((v) => {
    return morse[v];
  });
}

export async function pubToMorseCode(short = false, arr = false) {
  const ip = await getPublicIP();
  const ipStr = short ? toShortMorse(ip) : toLongMorse(ip);
  return arr ? ipStr : ipStr.join(' ');
}

export async function priToMorseCode(short = false, arr = false) {
  const ip = await getPrivateIP();
  const ipStr = short ? toShortMorse(ip) : toLongMorse(ip);
  return arr ? ipStr : ipStr.join(' ');
}
