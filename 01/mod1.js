module.exports = class dog{
    constructor(name){
        this.name = name;
    }

    bark(){
        console.log(`${this.name} do bark`);
    }
}