"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDataBaseClassic = void 0;
class MyDataBaseClassic {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (MyDataBaseClassic.instance === null) {
            MyDataBaseClassic.instance = new MyDataBaseClassic();
        }
        return MyDataBaseClassic.instance;
    }
    add(user) {
        this.users.push(user);
    }
    remove(index) {
        this.users.splice(index, 1);
    }
    show() {
        for (const user of this.users) {
            console.log(user);
        }
    }
}
exports.MyDataBaseClassic = MyDataBaseClassic;
MyDataBaseClassic.instance = null;
const myDatabaseClassic = MyDataBaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Oséias', age: 32 });
myDatabaseClassic.add({ name: 'Ricardo', age: 31 });
myDatabaseClassic.add({ name: 'Leonardo', age: 29 });
myDatabaseClassic.add({ name: 'teste', age: 5 });
myDatabaseClassic.show();
