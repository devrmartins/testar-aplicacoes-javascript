import Cart from "./Cart";
describe("Cart", () => {
  let cart, product, product2;

  beforeEach(() => {
    cart = new Cart();
    product = {
      title: "Camisa Adidas",
      price: 8990,
    };
    product2 = {
      title: "Camisa Adidas - Feminina",
      price: 8990,
    };
  });

  it("should return 0 when getTotal is executed in a newly created instace", () => {
    expect(cart.getTotal()).toBe(0);
  });
  it("should multiply quantity and price and receive the total amount", () => {
    cart.add({
      product,
      quantity: 2,
    });
    expect(cart.getTotal()).toBe(17980);
  });
  it("should ensure that if the product exists the quantity is added", () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toBe(26970);
  });
  it("should update total when a product included and then removed", () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product: product2,
      quantity: 1,
    });

    cart.remove(product);

    expect(cart.getTotal()).toBe(8990);
  });
});
