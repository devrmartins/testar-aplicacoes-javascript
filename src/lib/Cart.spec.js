import Cart from "./Cart";
describe("Cart", () => {
  let cart;
  let product;

  beforeEach(() => {
    cart = new Cart();
    product = {
      title: "Camisa Adidas",
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
});
