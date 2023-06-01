const photos = [
    './assets/img/F1.jpg',
    './assets/img/F2.jpg',
    './assets/img/F3.jpg',
    './assets/img/F4.jpg',
    './assets/img/F5.jpeg',
    './assets/img/F6.jpg',
    './assets/img/F7.jpg',
    './assets/img/F8.jpg',
    './assets/img/F9.jpeg',
    './assets/img/F10.webp',
];


export function obtenerTexto(e) {
    if (e >= 0 && e < photos.length) {
        return photos[e];
    } else {
        console.log('invalido');
    }
}

// const e = 2;
// const texto = obtenerTexto(e)
// console.log(`La foto es ${texto}`);