function* genKey() {
  let i = 0
  while(true) {
    yield i 
    i++
  }
}

class Key {
  constructor() {
    this.keys = genKey()
  }

  get next() {
    return this.keys.next().value
  }
}

export default function generate() {
  return new Key()
}