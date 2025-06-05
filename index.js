import { url } from "inspector";
import { argv } from "process";

const [, , metodo, recurso, id, ...params] = argv;


//mosttrar todos los productos GET
if (metodo === "GET" && recurso.startsWith("products") &&
  /^products\/\d+$/.test(argv[3]) !== true) {
  try {
    const baseUrl = "https://fakestoreapi.com/";    
    const url = id ? `${baseUrl}/products/${id}` : `${baseUrl}/products`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//mostar un producto por ID GET
if (
  metodo === "GET" &&
  recurso.startsWith("products") &&
  /^products\/\d+$/.test(argv[3]) == true
) {
  try {
    const match = argv.find((argv) => /^products\/\d+$/.test(argv));
    const id = match ? match.split("/")[1] : null;
    const baseUrl = "https://fakestoreapi.com";
    const url = id ? `${baseUrl}/products/${id}` : `${baseUrl}/products`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//eliminar un producto por ID  DELETE
if (
  metodo === "DELETE" &&
  recurso.startsWith("products") &&
  /^products\/\d+$/.test(argv[3]) == true
) {
  try {
    const match = argv.find((argv) => /^products\/\d+$/.test(argv));
    const id = match ? match.split("/")[1] : null;
    const baseUrl = "https://fakestoreapi.com";
    const url = id ? `${baseUrl}/products/${id}` : `${baseUrl}/products`;
    const response = await fetch(url, { method: "DELETE" });
    const data = await response.json();
   // console.log(data);
    console.log("Producto eliminado con éxito");
  } catch (error) {
    console.error(error);
  }
}

//crear un producto POST
if (metodo === "POST" && recurso.startsWith("products")) {
  try {
    const product = {
      id: 1,
      title: params[0],
      price: params[1],
      description: " ",
      category: params[2],
      image: " ",
      rating: { rate: 0, count: 0 },
    };
    
    const baseUrl = "https://fakestoreapi.com";
    const url = `${baseUrl}/products`;
    console.log("url:", url);

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
 
  } catch (error) {
    console.error(error);
  }
}
