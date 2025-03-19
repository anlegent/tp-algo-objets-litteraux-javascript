function creerPersonne(nom, age, ville) {
  const profil = {
    nom: "",
    age: "",
    ville: "",
  };
  profil.nom = nom;
  profil.age = age;
  profil.ville = ville;
  return profil;
}

console.log(creerPersonne("Alice", 30, "Paris")); // { nom: 'Alice', age: 30, ville: 'Paris' }
console.log(creerPersonne("Bob", 25, "Lyon")); // { nom: 'Bob', age: 25, ville: 'Lyon' }
