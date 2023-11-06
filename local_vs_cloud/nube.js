import * as firebase from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import * as firestore from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// Configuración de Firebase (debes reemplazar esto con tu propia configuración)
const firebaseConfig = {
  apiKey: "tu_api_key",
  authDomain: "tu_auth_domain",
  projectId: "tu_project_id",
  storageBucket: "tu_storage_bucket",
  messagingSenderId: "tu_messaging_sender_id",
  appId: "tu_app_id",
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

const contactsRef = firestore.collection(db, "contacts");

// Función para mostrar contactos en la interfaz de usuario
function displayContact(nombres, apellidos, direccion, celular) {
  const contactDiv = document.createElement("div");
  contactDiv.innerHTML = '<strong>nombres:</strong> ' + nombres + 
                         '<br><strong>Apellido:</strong> ' + apellidos + 
                         '<br><strong>Dirección:</strong> ' + direccion + 
                         '<br><strong>Celular:</strong> ' + celular +
                         '<hr>'; // Divisor entre contactos
  document.getElementById("contactList").appendChild(contactDiv);
}

// Función modificada para añadir contacto a Firestore y a la UI
function addContact() {
  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const direccion = document.getElementById("direccion").value;
  const celular = document.getElementById("celular").value;

  firestore
    .addDoc(contactsRef, {
      nombres: nombres,
      apellidos: apellidos,
      direccion: direccion,
      celular: celular,
    })
    .then(function (docRef) {
      console.log("Documento escrito con ID: ", docRef.id);
      displayContact(nombres, apellidos, direccion, celular); // Mostrar contacto en la UI
    })
    .catch(function (error) {
      console.error("Error añadiendo el documento: ", error);
    });

  document.getElementById("contactForm").reset();
}

// Función para cargar y mostrar los contactos de Firestore al cargar la página
function loadContacts() {
  firestore.getDocs(contactsRef).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const contact = doc.data();
      displayContact(
        contact.nombres,
        contact.apellidos,
        contact.direccion,
        contact.celular,
      );
    });
  });
}

// Añadir evento al botón de agregar contacto
document.getElementById("btnAgregar").addEventListener("click", addContact);

// Llamada a la función loadContacts cuando la ventana carga
window.onload = loadContacts;
