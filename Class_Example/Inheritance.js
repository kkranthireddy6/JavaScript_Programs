class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return `carname is: ${this.carname}`;
    }
}

class Model extends Car{
    constructor(brand){
        super(brand)
    }
    show(){
        return this.present();
    }
}

const brandmodel = new Model("Ford")
console.log(brandmodel.show())
