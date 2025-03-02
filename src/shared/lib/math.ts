export function getRandomNumber(digit?: number) {
  return Math.floor(Math.random() * Math.pow(10, digit || Math.floor(Math.random() * 10)));
}
