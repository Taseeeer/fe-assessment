export async function getAllProduct() {

    const response = await fetch('https://fakestoreapi.com/products');
    const json = response.json();

    return json;
}

export async function getProduct(id: any) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = response.json();
    
    return json;
}