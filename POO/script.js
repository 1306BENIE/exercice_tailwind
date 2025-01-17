/* creer une class personne 
1- name et age
2- ajouter une methode introduce qui doit afficher Bonjour je m'appelle nom et j'ai   age
instancier 2 objets personne et appellés les methode introduce 
*/

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    introduce(){
        console.log(`Bonjour je m'appelle ${this.name} et j'ai ${this.age} ans`);
    }
}

const person1 = new Person("BENIE", 25);
const person2 = new Person("Sylvestre", 24);
console.log(person1.introduce());
console.log(person2.introduce());











