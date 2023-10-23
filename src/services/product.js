export const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=7');
    return await response.json();
}

export const addProduct = async (title) => {
    await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });
} 