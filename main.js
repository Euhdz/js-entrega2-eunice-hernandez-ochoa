/* Curso de JavaScript en Coderhouse
 Mi proyecto final consistirá en una sección de cotización para el sitio web que hice en el curso de Desarrollo Web de Coderhouse: Workit-out Business Catering
  Workit-out Business Catering ofrecerá a empresas servicios de banquetes y paquetes que incluyen el lugar y/o mobiliario para eventos empresariales. Este sitio se encuentra en: https://workitout-business-catering.netlify.app/
 En ese sitio agregaré una sección en la que incluiré un cotizador de algunos paquetes especiales en Jardín Santa Ursula.
 El cotizador solicitaría al cliente potencial/usuario que ingrese el número de personas (el cual deberá estar entre 10 y 200), la selección del paquete y tal vez servicios adicionales, los cuales tendrán un 10% de descuento al contratar más de 1. 
  Los paquetes son los siguientes:
   Paquete 1. Paquete JSU Básico Plus
   Paquete 2. Paquete JSU Básico Plus con Desayuno. Aquí deberá seleccionar entre 2 opciones: Desayuno Emplatado o Desayuno Buffet.  (Las sub-opciones las iré agregando conforme aprenda más de JavaScript)
   Paquete 3. Paquete JSU Básico Plus con Comida. Aquí deberá seleccionar entre 3 opciones: Comida Emplatada o Comida Buffet o Bolsa Lunch. (Las sub-opciones las iré agregando conforme aprenda más de JavaScript)
   Paquete 4. Paquete JSU Básico Plus con Desayuno y Comida. Aquí debera seleccionar una de las 2 opciones de desayuno y 1 de las 3 opciones de comida. (Las sub-opciones las iré agregando conforme aprenda más de JavaScript)
 Los servicios adicionales a elegir son los siguientes (Estolo iré agregando conforme aprenda más de JavaScript):
   Pantalla de 150" y proyector
   Sala lounge. El número de salas lounge podrá ser entre 1 y 4
   Hora extra de evento con coffee break. El número de horas extra podrá ser entre 1 y 4.
*/

let nombreInteresado = prompt("Por favor, ingresa tu nombre");

for (i = 1; i <= 3; i++) {
  if (
    nombreInteresado == "" ||
    nombreInteresado == "." ||
    nombreInteresado == " "
  ) {
    alert("No ingresaste tu nombre, por favor ingresa tu nombre");
    nombreInteresado = prompt("Por favor ingresa tu nombre");
  } else {
  }
}

console.log(nombreInteresado);

let numIngresado = parseInt(
  prompt(
    "Hola, " +
      nombreInteresado +
      " por favor ingresa el número de personas de tu evento (mínimo 10 y máximo 200 personas)"
  )
);

console.log(numIngresado);

if (numIngresado < 10) {
  numIngresado = 10;
  alert(
    "El número de personas ingresado fue menor a 10 por lo que la cotización será para el mínimo de 10 personas"
  );
} else if (numIngresado > 200) {
  numIngresado = 200;
  alert(
    "El número de personas ingresado fue mayor a 200 por lo que la cotización será para el máximo de 200 personas"
  );
} else {
  numIngresado;
}
console.log(numIngresado);

const ArrayPaquetes = [];
let idPaq = 1;

class Paquete {
  constructor(idPaq, categoria, nombre, precio) {
    this.idPaq = idPaq;
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = parseInt(precio);
  }
  calcSubtotal() {
    this.precio = this.precio * numIngresado;
  }
}

const paqCofBr = new Paquete(
  idPaq++,
  "Coffee-break",
  "Paquete JSU Básico Plus",
  180
);
ArrayPaquetes.push(paqCofBr);

const paqDesEmp = new Paquete(
  idPaq++,
  "Desayuno",
  "Paquete JSU Básico Plus con Desayuno emplatado",
  320
);
ArrayPaquetes.push(paqDesEmp);

const paqDesBuf = new Paquete(
  idPaq++,
  "Desayuno",
  "Paquete JSU Básico Plus con Desayuno buffet",
  390
);
ArrayPaquetes.push(paqDesBuf);

const paqComEmp = new Paquete(
  idPaq++,
  "Comida",
  "Paquete JSU Básico Plus con Comida emplatado",
  465
);
ArrayPaquetes.push(paqComEmp);

const paqComBuf = new Paquete(
  idPaq++,
  "Comida",
  "Paquete JSU Básico Plus con Comida buffet",
  530
);
ArrayPaquetes.push(paqComBuf);

const paqComBol = new Paquete(
  idPaq++,
  "Comida",
  "Paquete JSU Básico Plus con Comida Bolsa Lunch",
  300
);
ArrayPaquetes.push(paqComBol);

const paqDesCom = new Paquete(
  idPaq++,
  "Desayuno y Comida",
  "Paquete JSU Básico Plus con Desayuno y Comida",
  605
);
ArrayPaquetes.push(paqDesCom);

console.log(ArrayPaquetes);

const mostrarPaquetesCategoria = (categoria) => {
  const filtrado = ArrayPaquetes.filter((el) =>
    el.categoria.includes(categoria)
  );

  let mensajeMostrar = "";

  filtrado.forEach((el) => {
    mensajeMostrar +=
      "\n Paquete " +
      el.idPaq +
      ": " +
      el.nombre +
      " " +
      "\nPrecio: $" +
      el.precio +
      "\n ";
  });

  alert(
    "Ingresa el número de este paquete si lo quieres cotizar o ingresa '0' para salir"
  );

  prompt(mensajeMostrar);

  let opcPaq;

  while (opcPaq != OPCION_SALIR) {
    switch (opcPaq) {
      case 1:
        alert(paqCofBr.calcSubtotal());
        break;
      case 2:
        alert(paqDesEmp.calcSubtotal());
        break;
      case 3:
        alert(paqDesBuf.calcSubtotal());
        break;
      case 4:
        alert(paqComEmp.calcSubtotal());
        break;
      case 5:
        alert(paqComBuf.calcSubtotal());
        break;
      case 6:
        alert(paqComBol.calcSubtotal());
        break;
      case 7:
        alert(paqDesCom.calcSubtotal());
        break;
      default:
        alert("Ingresó una opción no válida");
        break;
    }
    opcPaq = parseInt(prompt("Para salir ingresa 0"));
  }
};

const OPCION_SALIR = 0;

const verPaquetes = () => {
  let opcion;
  opcion = parseInt(
    prompt(
      "Elige el tipo de paquete que deseas: \n 1 - Coffee break solamente \n 2 - Con coffee-break y desayuno \n 3 - Con coffee-break y comida \n 0 - Volver atrás"
    )
  );
  while (opcion != OPCION_SALIR) {
    switch (opcion) {
      case 1:
        mostrarPaquetesCategoria("Coffee-break");
        break;
      case 2:
        mostrarPaquetesCategoria("Desayuno");
        break;
      case 3:
        mostrarPaquetesCategoria("Comida");
        break;
      default:
        alert("Ingresó una opción no válida");
        break;
    }
    opcion = parseInt(prompt("Para salir ingresa 0"));
  }
};

verPaquetes();
