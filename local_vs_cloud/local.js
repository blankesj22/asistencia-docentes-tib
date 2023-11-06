// Esta función añadirá un nuevo contacto y lo guardará en localStorage
function addContact() {
  // Obtenemos los valores del formulario
  var nombres = document.getElementById("nombres").value;
  var apellidos = document.getElementById("apellidos").value;
  var direccion = document.getElementById("direccion").value;
  var celular = document.getElementById("celular").value;

  // Creamos un objeto contacto
  var contact = {
    nombres: nombres,
    apellidos: apellidos,
    direccion: direccion,
    celular: celular,
  };

  // Obtenemos la lista actual de contactos y la actualizamos
  var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // Añadimos el contacto a la visualización
  displayContact(contact);

  // Limpiamos el formulario
  document.getElementById("contactForm").reset();
}

// Esta función mostrará un contacto en la página
function displayContact(contact) {
  var contactDiv = document.createElement("div");
  contactDiv.innerHTML = '<strong>nombres:</strong> ' + contact.nombres + 
                         '<br><strong>Apellido:</strong> ' + contact.apellidos + 
                         '<br><strong>Dirección:</strong> ' + contact.direccion + 
                         '<br><strong>Celular:</strong> ' + contact.celular + 
                         '<hr>';
  document.getElementById("contactList").appendChild(contactDiv);
}

// Esta función cargará y mostrará los contactos del localStorage cuando se cargue la página
function loadContacts() {
  var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.forEach(function (contact) {
    displayContact(contact);
  });
}

// Añadir evento al botón de agregar contacto
document.getElementById("btnAgregar").addEventListener("click", addContact);

// Llamamos a loadContacts cuando se carga la página
window.onload = loadContacts;
