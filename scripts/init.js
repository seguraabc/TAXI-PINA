gapi.load('client:auth2', initClient);
function initClient() {
  gapi.client.init({
    apiKey: 'AIzaSyAm9LrkJqLyy3N4VSOtKyne6vqHnT_1yGI',
    clientId: '945030943229-anhduag4lpmn0r5f62rf217pe2foure3.apps.googleusercontent.com',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  }).then(function(submitForm) {
     //La aplicación está autorizada y lista para usar la API de Google Sheets.
});
}