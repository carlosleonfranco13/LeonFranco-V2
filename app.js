//-- ACTIVACIÓN DEL "SCROLL-BG-HEADER" index.html --// 
const bgHeader = document.querySelector('.header');
const headerHeight = bgHeader.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if(scrollPos > headerHeight) {
        bgHeader.classList.add('active');
        bgHeader.classList.remove('transparent');
    } else {
        bgHeader.classList.remove('active');
        bgHeader.classList.add('transparent');
    }
});
//-- END --//
//-- OBTENER LA CLASE ACTIVE DEL NAV Y ACTIVAR --// 
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
//-- END --//
/*============FORM==============*/
document.addEventListener("DOMContentLoaded", function () {
    const email = {
      name: "",
      email: "",
      mensaje: "",
    };
  
    // Seleccionar los elementos de la interfaz
    const form = document.querySelector("#form");
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputMsj = document.querySelector("#mensaje");
    const btnSubmit = document.querySelector('#form button[type="submit"]');
    const spinner = document.querySelector("#spinner");
  
    // Asignar eventos
    inputName.addEventListener("input", validar);
    inputEmail.addEventListener("input", validar);
    inputMsj.addEventListener("input", validar);
    form.addEventListener("submit", enviarEmail);
  
    function enviarEmail(e) {
      e.preventDefault();
  
      spinner.classList.remove("hidden");
  
      setTimeout(() => {
        spinner.classList.add("hidden");
  
        resetForm();
  
        // Crear una alerta de enviado con éxito
        const alertaEnviado = document.createElement('P');
        alertaEnviado.classList.add("alertaEnviado");
        alertaEnviado.textContent = 'Mensaje enviado correctamente';
        form.appendChild(alertaEnviado);
        setTimeout(() => {
          alertaEnviado.remove();
        }, 3000);
      }, 3000);
    }
  
    function validar(e) {
      if (e.target.value.trim() === "") {
        mostrarAlerta(
          `El campo ${e.target.name} es obligatorio`,
          e.target.parentElement
        );
        email[e.target.id] = "";
        comprobarEmail();
        return;
      }
  
      if (e.target.id === "email" && !validarEmail(e.target.value)) {
        mostrarAlerta("El email no es válido", e.target.parentElement);
        email[e.target.id] = "";
        comprobarEmail();
        return;
      }
  
      limpiarAlerta(e.target.parentElement);
  
      // Asignar los valores
      email[e.target.id] = e.target.value.trim().toLowerCase();
  
      // Comprobar el objeto de email
      comprobarEmail();
    }
  
    function mostrarAlerta(mensaje, referencia) {
      limpiarAlerta(referencia);
  
      // Generar alerta en el HTML
      const alertaError = document.createElement("P");
      alertaError.textContent = mensaje;
      alertaError.classList.add("alertaError");
  
      // Mostrar la Alerta en el html(Form)
      referencia.appendChild(alertaError);
    }
  
    function limpiarAlerta(referencia) {
      // Comprueba si ya existe una alerta
      const alerta = referencia.querySelector(".alertaError");
      if (alerta) {
        alerta.remove();
      }
    }
  
    function validarEmail(email) {
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      const resultado = regex.test(email);
      return resultado;
    }
  
    function comprobarEmail() {
      if (Object.values(email).includes("")) {
        btnSubmit.disabled = true;
        return;
      }
      btnSubmit.disabled = false;
    }
  
    function resetForm() {
      // Reiniciar el objeto
      email.name = "";
      email.email = "";
      email.mensaje = "";
  
      form.reset();
      comprobarEmail();
    }
  });
  