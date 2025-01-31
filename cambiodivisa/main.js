const tipoDeCambio = {
    'euro': {
      'dolar': 1.10,
      'yén': 0.0092
    },
    'dolar': {
      'euro': 0.91,
      'yén': 0.0085
    },
    'yén': {
      'euro': 108.95,
      'dolar': 117.25,
    }
  };
  
  // Obtenemos el formulario HTML
  const formulario = document.getElementById('formulario');
  
  // Agregamos un evento de submit al formulario
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // Obtenemos los valores de los campos de texto
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaDestino = document.getElementById('monedaDestino').value;
  
    // Verificamos que los campos estén correctamente llenados
    if (monedaOrigen === '' || cantidad <= 0 || monedaDestino === '') {
      alert('Por favor, ingresa los valores correctamente');
      return;
    }
  
    // Calculamos la conversión
    const tipoDeCambioActual = tipoDeCambio[monedaOrigen][monedaDestino];
    const cantidadDestino = cantidad * tipoDeCambioActual;
  
    // Mostramos el resultado
    document.getElementById('resultado').innerHTML = `Para ${cantidad} ${monedaOrigen} equivale a ${cantidadDestino.toFixed(2)} ${monedaDestino}`;
  });