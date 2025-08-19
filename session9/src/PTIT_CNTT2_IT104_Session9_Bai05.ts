class DataStore<T> {
    private data: T[] = [];
    addItem(item: T): void {
        this.data.push(item);
    }
    getAll(): T[]{
        return this.data;
    }
    remove(index: number): void{
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
