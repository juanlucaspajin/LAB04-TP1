interface Distributor {
    createDistributor(): void;
}

class Dron implements Distributor{
    private _capacity:Number;
    private _batery:Number;

    constructor(){
        this._capacity = 120;
        this._batery = 100;
    }

    //Override de metodo de Irepartidor
    createDistributor(): void {
        console.log("se ha creado un Dron")
    }

}

class DeliveryMan implements Distributor {
    private _capacity:Number;
    private _name:string;

    constructor(){
        this._capacity = 120;
        this._name = "El masi";
    }
    createDistributor(): void {
        console.log("Soy un repartidor humano");
    }
}

abstract class DistributorCreatorFactory {
    public abstract create() : Distributor; // Factory method

    public getInfo() : string {
        const distributor = this.create();
        return "The result is: " + distributor.createDistributor();
    }
}

class DroneCreator extends DistributorCreatorFactory {
    public create() {
        return new Dron();
    }
}

class DeliveryManCreator extends DistributorCreatorFactory {
    public create() {
        return new DeliveryMan();
    }
}


// Implementación
// main.ts

function main(creator: DistributorCreatorFactory) {
    console.log(creator.getInfo());
}

main(new DroneCreator());
main(new DeliveryManCreator());