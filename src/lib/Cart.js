import find from "lodash/find";

export default class Cart {
    total = 0;
    items = [];

    add(item) {
        if (!find(this.items, { product: item.product })) this.items.push(item);
        
    }

    getTotalItems() {
        return this.items.length;
    }

    getTotal() {
        return this.items.reduce(
            (acc, item) => acc + item.quantity * item.product.price,
            0
        );
    }
}
