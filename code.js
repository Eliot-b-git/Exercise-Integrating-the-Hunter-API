function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Hunter.io')
      .addItem('Configurer API', 'showConfigSidebar')
      .addToUi();
  }
  
  function showConfigSidebar() {
    const htmlOutput = HtmlService.createHtmlOutputFromFile('ConfigSidebar')
      .setTitle('Configurer Hunter.io API');
    SpreadsheetApp.getUi().showSidebar(htmlOutput);
  }
  
  function setApiKey(apiKey) {
    PropertiesService.getUserProperties().setProperty('HUNTER_IO_API_KEY', apiKey);
    SpreadsheetApp.getUi().alert('Clé API enregistrée avec succès.');
  }
  
  function getEmails(firstName, lastName, domain) {
    const apiKey = PropertiesService.getUserProperties().getProperty('HUNTER_IO_API_KEY');
    if (!apiKey) {
      throw new Error('API Key non configurée. Veuillez configurer votre clé API Hunter.io.');
    }
  
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!domainPattern.test(domain)) {
      throw new Error('Domaine invalide: ' + domain);
    }
  
    const url = `https://api.hunter.io/v2/email-finder?first_name=${firstName}&last_name=${lastName}&domain=${domain}&api_key=${apiKey}`;
    const response = UrlFetchApp.fetch(url);
    const json = JSON.parse(response.getContentText());
    if (json.errors) {
      throw new Error('Erreur API: ' + json.errors[0].details);
    }
    return json.data.email;
  }
  
  function findEmail(firstName, lastName, domain) {
    try {
      const email = getEmails(firstName, lastName, domain);
      return email ? email : 'Email non trouvé';
    } catch (e) {
      return 'Erreur: ' + e.message;
    }
  }
  
  function FIND_EMAIL(firstName, lastName, domain) {
    return findEmail(firstName, lastName, domain);
  }
  