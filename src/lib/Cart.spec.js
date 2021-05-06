import Cart from "./Cart";

describe("Cart", () => {
    let cart;
    let product;
    let product2;

    beforeEach(() => {
        cart = new Cart();
        product = {
            title: "Adidas running shoes - men",
            price: 35388,
        };

        product2 = {
            title: "Adidas running shoes - women",
            price: 42763,
        };
    });

    it("should return 0 when getTotal() is executed in a newly created instancy", () => {
        expect(cart.getTotal()).toEqual(0);
    });

    it("should multiply quantity and price and receive the total amount", () => {
        cart.add({
            product,
            quantity: 2,
        });

        expect(cart.getTotal()).toEqual(70776);
    });

    it("should sum quantity when the product already exists", () => {
        cart.add({
            product,
            quantity: 2,
        });

        cart.add({
            product,
            quantity: 1,
        });

        expect(cart.items[0].quantity).toEqual(3);
        expect(cart.getTotal()).toEqual(106164);
    });

    it("should update total when a product gets included an then removed", () => {
        cart.add({
            product,
            quantity: 3,
        });
        cart.add({
            product: product2,
            quantity: 3,
        });

        cart.remove(product);

        expect(cart.getTotal()).toEqual(128289);
    });

    it("should return the total items on cart", () => {
        cart.add({
            product,
            quantity: 2,
        });

        expect(cart.getTotalItems()).toEqual(1);
    });

    it("should ensure no more than on product exists at a time", () => {
        cart.add({
            product,
            quantity: 2,
        });
        cart.add({
            product,
            quantity: 1,
        });

        expect(cart.getTotalItems()).toEqual(1);
    });

    it("should return a item searching by product", () => {
        let item1 = {
            product,
            quantity: 5,
        };

        let item2 = {
            product: product2,
            quantity: 5,
        };

        cart.add(item1);
        cart.add(item2);

        expect(cart.getItem(product2)).toMatchObject(item2);
    });

    it('should return an object with the total and the list of items', () => {
        cart.add({
            product,
            quantity: 2,
        });

        cart.add({
            product: product2,
            quantity: 5,
        });

        expect(cart.checkout()).toMatchSnapshot()
    })

    it('should return an object with the total and the list of items when summary is called', () => {
        cart.add({
            product,
            quantity: 2,
        });

        cart.add({
            product: product2,
            quantity: 5,
        });

        expect(cart.summary()).toMatchSnapshot()
    })

    it('should reset the cart when checkout() is called', () => {
        cart.add({
            product,
            quantity: 2,
        });

        cart.checkout()

        expect(cart.getTotal()).toEqual(0)
    })
});
