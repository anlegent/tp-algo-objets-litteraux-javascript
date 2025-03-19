function trouverPersonne(personnes, nom) {
  if (personnes[1].nom == nom) {
    return personnes[1];
  } else {
    return null;
  }
}

// Tests
const personnes = [
  { nom: "Alice", age: 30 },
  { nom: "Bob", age: 25 },
  { nom: "Charlie", age: 35 },
];

console.log(trouverPersonne(personnes, "Bob")); // { nom: 'Bob', age: 25 }
