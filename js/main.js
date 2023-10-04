
const vehiculosEnVenta = [];

function agregarVehiculo() {
  const marca = prompt("Ingrese la marca del vehiculo:");
  const modelo = prompt("Ingrese el modelo del vehiculo:");
  const color = prompt ("Indique el color de su vehiculo");
  const precio = parseFloat(prompt("Ingrese el precio del vehículo:"));
  const anio = parseFloat(prompt("Ingrese de que año es el vehiculo"));

  const vehiculo = { marca, modelo, color, precio, anio };
    vehiculosEnVenta.push(vehiculo);

  console.log("Vehículo agregado con éxito.");
}


function verVehiculosEnVenta() {
  console.log("Vehículos a la venta:");
  vehiculosEnVenta.forEach((vehiculo, i) => {
    console.log(`[${i ++}] Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}, Color: ${vehiculo.color}, Precio: $${vehiculo.precio} , Año: ${vehiculo.anio}`);
  });
}


function filtrarPorModelo() {
  const modeloFiltrado = prompt("Ingrese el modelo para filtrar:");

  const vehiculosFiltrados = vehiculosEnVenta.filter((vehiculo) => vehiculo.modelo.toLowerCase() === modeloFiltrado.toLowerCase());

  if (vehiculosFiltrados.length > 0) {
    console.log(`Vehículos con modelo ${modeloFiltrado}:`);
    vehiculosFiltrados.forEach((vehiculo, i) => {
      console.log(`[${i + 1}] Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}, Color: ${vehiculo.color}, Precio: $${vehiculo.precio} , Año: ${vehiculo.anio}`);
    });
  } else {
    console.log(`No se encontraron vehículos con modelo ${modeloFiltrado}.`);
  }
}


function eliminarVehiculo() {
  const idAEliminar = parseInt(prompt("Ingrese el número del vehículo a eliminar:"));

  if (isNaN(idAEliminar) || idAEliminar < 1 || idAEliminar > vehiculosEnVenta.length) {
    console.log("Número de vehículo no válido.");
  } else {
    const vehiculoEliminado = vehiculosEnVenta.splice(idAEliminar - 1, 1);
    console.log(`Vehículo eliminado con éxito: Marca: ${vehiculoEliminado[0].marca}, Modelo: ${vehiculoEliminado[0].modelo}`);
  }
}



while (true) {
  const opcion = parseInt(prompt(
    "Seleccione una opción:\n" +
    "1- Agregar vehículo\n" +
    "2- Ver vehículos a la venta\n" +
    "3- Filtrar vehiculos por modelo\n" +
    "4- Eliminar un vehículo\n" +
    "5- Salir"
  ));

  switch (opcion) {
    case 1:
      agregarVehiculo();
      break;
    case 2:
      verVehiculosEnVenta();
      break;
    case 3:
      filtrarPorModelo();
      break;
    case 4:
      eliminarVehiculo();
      break;
  
    case 5:
      alert("Hasta Pronto");
      process.exit();
    default:
      console.log(" Por favor, seleccione una opción válida.");
  }
}


