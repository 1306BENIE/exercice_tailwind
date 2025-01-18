/* *Exercice :*EXO2

1. Créez une classe parent Animal avec :
    - Une propriété name.
    - Une méthode makeSound() qui affiche : "[Nom] fait un bruit."
2. Créez une classe enfant Dog qui hérite de Animal et :
    - Redéfinissez la méthode makeSound() pour afficher : "[Nom] aboie."
3. Créez une instance de chaque classe et appelez leurs méthodes. */

class Animal {
    constructor(name){
        this.name = name;
    }
    makeSound(){
       return `${this.name} fait un bruit.`;
    }
}

class Dog extends Animal {
    makeSound(){
        return `${this.name} aboie.`;
    }
}

const myAnimal = new Animal('chat');

const myDog = new Dog('chien');

console.log(myAnimal.makeSound());
console.log(myDog.makeSound());











