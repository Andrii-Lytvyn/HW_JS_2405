const obj = {
    products: [
        { title: "bottle of wine", price: 35, category: "wines" },
        { title: "1984", price: 15, category: "books", author: "George Orwell" },
        { title: "Iphone XR", price: 400, category: "phones", campera: "12MP" }
    ]
};
const { products } = obj;
const [, search] = products;
const { authors } = search;
const { author } = search;
console.log(author);