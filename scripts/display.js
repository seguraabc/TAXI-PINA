function displayResult(result) {
    const resultadoContainer = document.getElementById('resultado-container');
  
    if (result) {
      resultadoContainer.innerHTML = 'PRECIO: $' + result;
    } else {
      resultadoContainer.innerHTML = 'No se encontraron datos en la celda especificada.';
    }
  }