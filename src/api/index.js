const BASE_URL = "https://univ-contact-book.herokuapp.com/api/contacts";

async function fetchAPI(url, method="GET", sendData=null) {
    const fetchOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRheWxvciIsImlhdCI6MTYwNTU3ODA2OSwiZXhwIjoxNjA2MTgyODY5fQ._WUD8I1xMS_6OZMaNWgrlZ0CfPNUTySE3i7KuA0sUnQ'
      }
    };
  
    if (sendData) {
      fetchOptions.body = JSON.stringify(sendData);
    }
  
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
  
    return data;
  }


fetchAPI("https://univ-contact-book.herokuapp.com/api/contacts")
  .then(function (data) {
    console.log('my contacts', data);
  })
  .catch(function (error) {
    console.error('error fetching contacts', error);
  })