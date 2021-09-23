let TASK_LIST = [
  {
    id: "1007734961",
    name: "Jorge David",
    lastname: "Tirado Perez",
    year: "26",
    phone: "3103216549",
    city: "Itagui",
    direction: "Cra 58 #77-30",
  },
  {
    id: "10896753",
    name: "Milena Patricia",
    lastname: "Rodriguez Ursula",
    year: "30",
    phone: "3128746355",
    city: "Medellin",
    direction: "Calle 88 #103-55",
  },
  {
    id: "1963843571",
    name: "Leidys",
    lastname: "Marimon Tirado",
    year: "11",
    phone: "3151234567",
    city: "Planeta Rica",
    direction: "Cra 22 #50-35",
  },
];

document.body.onload = init;

function init() {
  const form = document.getElementById("create-task-form"); // se extrae el formulario
  form.addEventListener("submit", addTask);
  //console.log({ ...form });

  const form1 = document.getElementById("create-edit-form"); // se extrae el formulario de la caja editar el contacto
  form1.addEventListener("submit", editTask);

  const form2 = document.getElementById("create-delete-form"); // se extrae el formulario de la caja eliminar contacto
  form2.addEventListener("submit", deleteTask);

  const form3 = document.getElementById("create-move-form"); // se extrae el formulario de la caja mover contacto frontal
  form3.addEventListener("submit", organizeTask);

  //removeDOMTasks();
  loadTasksInDOM();
}

function loadTasksInDOM() {
  const listBody = document.getElementById("list-body");

  TASK_LIST.forEach((task) => {
    const tr = document.createElement("tr");
    tr.className = "list-row";
    const tdId = document.createElement("td");
    tr.className = "list-row";
    const tdName = document.createElement("td");
    tr.className = "list-row";
    const tdLastName = document.createElement("td");
    tr.className = "list-row";
    const tdyear = document.createElement("td");
    tr.className = "list-row";
    const tdphone = document.createElement("td");
    tr.className = "list-row";
    const tdcity = document.createElement("td");
    tr.className = "list-row";
    const tddirection = document.createElement("td");
    tr.className = "list-row";

    tdId.innerText = task.id;
    tdId.className = "list-head-item";
    //
    tdName.innerText = task.name;
    tdName.className = "list-head-item";
    //
    tdLastName.innerText = task.lastname;
    tdLastName.className = "list-head-item";
    //
    tdyear.innerText = task.year;
    tdyear.className = "list-head-item";
    //
    tdphone.innerText = task.phone;
    tdphone.className = "list-head-item";
    //
    tdcity.innerText = task.city;
    tdcity.className = "list-head-item";
    //
    tddirection.innerText = task.direction;
    tddirection.className = "list-head-item";

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdyear);
    tr.appendChild(tdphone);
    tr.appendChild(tdcity);
    tr.appendChild(tddirection);

    listBody.appendChild(tr);
  });
}

function addTask(event) {
  event.preventDefault();
  const newId = document.getElementById("new-task-id");
  const newName = document.getElementById("new-task-name");
  const newLastName = document.getElementById("new-task-lastname");
  const newYear = document.getElementById("new-task-year");
  const newPhone = document.getElementById("new-task-phone");
  const newCity = document.getElementById("new-task-city");
  const newDirection = document.getElementById("new-task-direction");

  let isCreated = false;
  TASK_LIST.forEach((task) => {
    if (task.id === newId.value) {
      isCreated = true;
    }
  });

  if (isCreated) {
    alert("Id repetido");
    return null;
  }

  const newTask = {
    id: newId.value,
    name: newName.value,
    lastname: newLastName.value,
    year: newYear.value,
    phone: newPhone.value,
    city: newCity.value,
    direction: newDirection.value,
  }; //se crea un obetivos de tipo TASK_LIST

  TASK_LIST.push(newTask);

  //console.log(newTask);
  //console.log(TASK_LIST);
  removeDOMTasks();
  loadTasksInDOM();
}
//AQUI EMPIEZA EL CÓDIGO

function editTask(event) {
  event.preventDefault();

  const idForEdit = document.getElementById("new-edit-id");
  const nameForEdit = document.getElementById("new-edit-name");
  const lastNameForEdit = document.getElementById("new-edit-lastname");
  const yearForEdit = document.getElementById("new-edit-year");
  const phoneForEdit = document.getElementById("new-edit-phone");
  const cityForEdit = document.getElementById("new-edit-city");
  const directionForEdit = document.getElementById("new-edit-direction");

  TASK_LIST.forEach((task) => {
    if (task.id === idForEdit.value) {
      task.name = nameForEdit.value;
      task.lastname = lastNameForEdit.value;
      task.year = yearForEdit.value;
      task.phone = phoneForEdit.value;
      task.city = cityForEdit.value;
      task.direction = directionForEdit.value;
    }
  });

  removeDOMTasks();
  loadTasksInDOM();
}

//AQUI TERMINA EL CÓDIGO
function removeDOMTasks() {
  const listBody = document.getElementById("list-body");

  while (listBody.lastChild) {
    listBody.removeChild(listBody.lastChild);
  }
}

//AQUI EMPIEZA EL CÓDIGO ELIMINAR CONTACTO
function deleteTask(event) {
  event.preventDefault();
  const idDelete = document.getElementById("new-delete-id");

  TASK_LIST = TASK_LIST.filter((task) => task.id != idDelete.value);

  removeDOMTasks();
  loadTasksInDOM();
}
//AQUI TERMINA EL CÓDIGO ELIMINAR CONTACTO

//AQUI EMPIEZA EL CÓDIGO MOVER CONTACTO PARTE FRONTAL

function organizeTask(event) {
  event.preventDefault();
  const idOrganize = document.getElementById("new-move-id");

  //me filtra unicamente el id solicitado
  const filterOrganize = TASK_LIST.filter(
    (task) => task.id === idOrganize.value
  );

  //me filtra todo lo diferente del id solicitado
  let filterTASK_LIST = TASK_LIST.filter((task) => task.id != idOrganize.value);

  //TASK_LIST = Arrays.filterOrganize.concat(filterTASK_LIST);

  console.log("filterOrganize :", filterOrganize);
  console.log("filterTASK_LIST :", filterTASK_LIST);

  TASK_LIST = filterOrganize.concat(filterTASK_LIST);

  console.log(TASK_LIST);

  removeDOMTasks();
  loadTasksInDOM();
}
//AQUI TERMINA EL CÓDIGO MOVER CONTACTO PARTE FRONTAL
