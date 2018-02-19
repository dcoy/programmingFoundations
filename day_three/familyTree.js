class Grandparents {
  constructor(name, hairColor, eyeColor, vertical) {
    this.name = name;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.vertical = vertical;
  }
}

class Parents extends Grandparents {
  constructor(name, hairColor, eyeColor, vertical) {
    super(name, hairColor, eyeColor, vertical)
  }
}

class Children extends Parents {
  constructor(name, hairColor, eyeColor, vertical) {
    super(name, hairColor, eyeColor, vertical)
  }
}

let grandmother = new Grandparents('Grandma', 'grey', 'green', 22);
let mother = new Parents('Mom', 'blonde', 'green', 30);
let kid = new Children('Suzy', 'brown', 'blue', 16);

let arr = new Array(grandmother, mother, kid);

for (const val of arr) {
  let obj = Object.values(val);
  console.log(`${obj[0]} can jump ${obj[3]} inches high.`);
}