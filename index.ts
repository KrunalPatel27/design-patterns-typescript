const world = '🗺️';
console.log(hello())

export function hello(word: string = world): string {
  console.log("eh hello")
  return `Hello ${world}! `
}