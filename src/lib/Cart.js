import find from "lodash/find";
import remove from "lodash/remove";

export default class Cart {
  items = [];
  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  remove(product) {
    remove(this.items, { product });
  }

  add(item) {
    const itemFinded = find(this.items, { product: item.product });
    if (itemFinded) {
      itemFinded.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }
}
