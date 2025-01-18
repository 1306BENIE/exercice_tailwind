/* 1. Créez une classe BankAccount avec :
    - Une propriété privée #balance pour stocker le solde.
    - Un constructeur pour initialiser le solde.
    - Une méthode deposit(amount) pour ajouter de l'argent au compte.
    - Une méthode withdraw(amount) pour retirer de l'argent (si le solde est suffisant).
    - Une méthode getBalance() pour afficher le solde.
2. Créez une instance de BankAccount et effectuez des dépôts et des retraits. */

class BankAccount{
    #balance
    constructor(initialBalance){
        this.#balance = initialBalance;
    }
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Un dépot de ${amount} a été éffectué(s). Nouveau solde ${this.#balance}`);
            
        } else{
            console.log("Veuillez entrer un montant positif");
        }
    }
    withdraw(amount){
        if(amount <= 0){
            console.log("Le montant saisi n'est pas correct");
        } else if(amount > this.#balance){
            console.log("Solde insuffisant");
        } else{
            this.#balance -= amount;
            console.log(`Un retrait de ${amount} a été effectué(s). Nouveau solde ${this.#balance}`);
        }
    }
    getBalance(){
       console.log(` Compte principal: ${this.#balance}`)
    }

}

const myAccount = new BankAccount(10000);
myAccount.deposit(0)
myAccount.withdraw(300)
console.log(myAccount.getBalance());

