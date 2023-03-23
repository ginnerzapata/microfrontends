import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container!");

productsMount(document.querySelector("#my-product"));
cartMount(document.querySelector("#my-cart"));
