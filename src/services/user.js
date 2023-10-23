export const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=4");
    return await response.json();
}

export const addUser = async (data) => {
    await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}