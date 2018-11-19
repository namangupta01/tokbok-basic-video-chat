// replace these values with those generated in your TokBox Account
var apiKey = "46218562";
var sessionId = "2_MX40NjIxODU2Mn5-MTU0MjYxMTM3MTk2MX5OL1BYVlNicFREZUU0QVJYMGEwWHBVcHJ-UH4";
var token = "T1==cGFydG5lcl9pZD00NjIxODU2MiZzaWc9N2Q0NmQzNjhmYjg4NTY3NTdiODZiOGRhMWI2NGFiYzExNjQ5MWNjOTpzZXNzaW9uX2lkPTJfTVg0ME5qSXhPRFUyTW41LU1UVTBNall4TVRNM01UazJNWDVPTDFCWVZsTmljRlJFWlVVMFFWSllNR0V3V0hCVmNISi1VSDQmY3JlYXRlX3RpbWU9MTU0MjYxMTM5MCZub25jZT0wLjIxODEwMTA1MjAxMzI3JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1NDI2MTQ5OTEmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=";
// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}