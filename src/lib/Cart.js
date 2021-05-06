import { find, remove } from "lodash";
export default class Cart {
    total = 0;
    items = [];

    add(item) {
        const itemToFind = { product: item.product }
        const itemFind = find(this.items, itemToFind);

        if ( itemFind ) {
            itemFind.quantity += item.quantity
        } else {
            this.items.push(item);
        }
        
    }

    getItem(product) {
        return find(this.items, { product })
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

    summary() {
        const total = this.getTotal()
        const items = this.items

        return {
            total,
            items
        }
    }

    checkout() {
        const {total,items} = this.summary()

        this.items = []

        return {
            total,
            items
        }
    }

    remove(product) {
        remove(this.items, { product })
    }
}
