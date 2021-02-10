import Cart from "./Cart";
describe("Cart", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should return 0 when getTotal is executed in a newly created instace", () => {
    expect(cart.getTotal()).toBe(0);
  });
  it("should multiply quantity and price and receive the total amount", () => {
    const item = {
      product: {
        title: "Camisa Adidas",
        price: 8990,
      },
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toBe(17980);
  });
});
