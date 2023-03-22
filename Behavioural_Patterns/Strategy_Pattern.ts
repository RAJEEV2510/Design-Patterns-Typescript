// strategy pattern mainly used for reduced the code duplicacy of subsclass methods

interface IStrategy {
    attack(): void;
}

/* SwordAttackStrategy is a class that implements the strategy interface  */
class SwordAttackStrategy implements IStrategy {

    attack(): void {
        console.log("SwordAttackStrategy");
    }
}

/* KnifeAttackStrategy implements the strategy interface. */
class KnifeAttackStrategy implements IStrategy {

    attack(): void {
        console.log("KnifeAttackStrategy");
    }
}

class Character {
    strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    public attack() {
        this.strategy.attack();
    }
}



let swordAttackStrategy = new SwordAttackStrategy();
let knifeAttackStrategy = new KnifeAttackStrategy();

//characters
let paul = new Character(swordAttackStrategy);
let yoshtimitshu = new Character(knifeAttackStrategy);
let brayan = new Character(swordAttackStrategy);

// different characters
paul.attack();
yoshtimitshu.attack();
brayan.attack();