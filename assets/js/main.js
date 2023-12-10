const inputTarea = document.querySelector('input');
const btnAgregar = document.querySelector('#agregar');
const lista = document.querySelector('ul');
const total = document.querySelector('#total');
const realizadas = document.querySelector('#realizadas');
const tareas = [
    { id: 1, nombre: 'Comprar en el super', completed: false },
    { id: 2, nombre: 'Estudiar para la prueba', completed: false },
    { id: 3, nombre: 'Pasear al perro', completed: false },
];

btnAgregar.addEventListener('click', () => {
    if (inputTarea.value === '') return;
    const ultimoId = tareas[tareas.length - 1];
    tareas.push({ id: ultimoId ? ultimoId.id + 1 : 1, nombre: inputTarea.value, completed: false });
    inputTarea.value = '';

    agregarALista(); // invoca a la función 
    actualizar();
});

const agregarALista = () => {
    lista.innerHTML = tareas.map((t) =>
    `<li class="${t.completed ? 'completed' : ''}">${t.id} ${t.nombre} <input type="checkbox" onclick="comprobar(${t.id})" ${t.completed ? 'checked' : ''}> <button onclick="borrar(${t.id})">X</button></li>`
    ).join('');
    if (tareas.completed) {
        tareas++;
    }
    const tareasRealizadas = tareas.filter((t) => t.completed).length;
    realizadas.textContent = tareasRealizadas;
    console.log(tareas); // ver en consola si se están agregando los obj en el array
    actualizar()
};

const borrar = (id) => {
    const index = tareas.findIndex((t) => t.id === id);
    tareas.splice(index, 1);
    agregarALista();
    actualizar();
};

const comprobar = (id) => {
    const tarea = tareas.find((t) => t.id === id);
    tarea.completed = !tarea.completed;
    agregarALista();
    actualizar();
};

const actualizar = () => {
    total.innerHTML = tareas.length;
};

agregarALista();

