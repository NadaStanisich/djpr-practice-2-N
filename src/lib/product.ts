class Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    //productId: number;

    constructor(id: number, name: string, quantity: number, price: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

export { Product}