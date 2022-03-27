getDogPicture();

async function getDogPicture() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const dog = await res.json();
}