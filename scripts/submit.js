function submitForm() {
    // Obtiene los valores seleccionados de las listas desplegables
    const selectColumna = document.getElementById('dato1');
    const selectFila = document.getElementById('dato2');
    const dato1 = selectColumna.options[selectColumna.selectedIndex].getAttribute('data-enviar');
    const dato2 = selectFila.options[selectFila.selectedIndex].getAttribute('data-enviar');
  
    // Concatena los valores de dato1 y dato2 para formar el rango de celda
    const rango = dato1 + dato2;
  
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '19l3z8DvN-voHvnVHFuqyRk56LirKf4xuG88FKbh3rfI',
      range: 'Hoja 1!' + rango, // Forma el rango de celda
    }).then(function(response) {
      const value = response.result.values[0][0]; // Obtiene el valor de la celda
      displayResult(value);
    });
  }