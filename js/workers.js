import { obtenerTexto } from "./photos.js"

class Worker {
    constructor(name,salary, starts, photo) {
        this.name = name; 
        this.salary = salary;
        this.starts = starts;
        this.photo = photo;
    }
}

class UI  {
    addWorker(product, star1, star2, star3, star4, star5, photo) {
        const workerlist = document.getElementById('workers-list');
        const element = document.createElement('div')
        element.className += 'workers-container'
        element.innerHTML = `
            <img src="${photo}" alt="">
            <h3>${product.name}</h3>
            <p>Salario $<span>${product.salary}</span></p>
            <div>
                <img src="${star1}" alt="">
                <img src="${star2}" alt="">
                <img src="${star3}" alt="">
                <img src="${star4}" alt="">
                <img src="${star5}" alt="">
            </div>
        `
        workerlist.appendChild(element)
    }
}

function workers(name, salary, stats, photo) {
   const w = new Worker(name,salary);
   const photoUser = obtenerTexto(photo);

   if (stats === 5) {
    const ui = new UI()
    ui.addWorker(w, 
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        photoUser
        );
   } else if (stats === 4) {
    const ui = new UI()
    ui.addWorker(w, 
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start.svg',
        photoUser
        );
   } else if (stats === 3) {
    const ui = new UI()
    ui.addWorker(w, 
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        photoUser
        );
   } else if (stats === 2) {
    const ui = new UI()
    ui.addWorker(w, 
        './assets/svg/start-full.svg',
        './assets/svg/start-full.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        photoUser
        );
   } else if (stats === 1) {
    const ui = new UI()
    ui.addWorker(w, 
        './assets/svg/start-full.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        photoUser
        );
   } else if (stats === 0) {
    const ui = new UI()
    ui.addWorker(w, 
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        './assets/svg/start.svg',
        photoUser
        );
   } else {
    console.error('Ese valor no existe')
   }
}

workers('Rodrigo', 2344, 4, 5);
workers('Sebas', 20000, 3, 7);
workers('Luis', 15000, 2, 4);
workers('Felix', 10, 5, 2);
workers('Yahir', 6000, 2, 0);
workers('Cesarin', 200, 3, 9);