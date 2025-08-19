"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this.data.splice(index, 1);
    }
}
const store = new DataStore();
store.addItem(1);
store.addItem(2);
store.addItem(3);
console.log(store.getAll());
store.remove(1);
console.log(store.getAll());
