let url = 'www.google.com'
fetch(url)
  .then( function(response) {
    return response.blob()
  })
  .then( function(myBlob) {
    console.log(myBlob)
  })

// json 
url = 'https://staging-api.emq.com/api/v4/transfer/corridors/HKG/PHL'
fetch( url )
  .then( response => response.json() )
  .then( json => console.log(json) )
