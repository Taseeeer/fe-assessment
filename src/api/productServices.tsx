export async function getAllProduct() {

    const response = await fetch('https://fakestoreapi.com/products');
    const json = response.json();

    return json;
}