let url = 'www.google.com'
fetch(url)
  .then( function(response) {
    return response.blob()
  })
  .then( function(myBlob) {
    console.log(myBlob)
  })
