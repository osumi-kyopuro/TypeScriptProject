//type addFunc = (num1: number, num2: number) => number;
interface addFun{
    (num1: number, num2: number): number;
}
let addFunc: addFun;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

type Nameable={
    name: string;
    nickName?: string;
}

const Nameable: Nameable = {
    name: 'Quill',
    nickName:'Quilla'
}



interface Human extends Nameable {
    name: string;
    age: number;
    greeting(message: string):void;
}

// const human: Human= {
//     name: 'Quill',
//     age: 38,
//     greeting(message:string) {
//         console.log(message);
//     }
// }

class Developer implements Human{ 
    constructor(public name: string, public age: number, public experience:number) {
        
     }
    greeting(message: string='hello'): void {
        console.log(message);
    }
}
//let tmpFunc: (message: string):void;
//構造的部分型
let user: Human = new Developer('Quill', 38, 3);
user.name = 'afa';

