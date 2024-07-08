// Add your code here 

function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email,
    };
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(parsedData => {
      const newId = parsedData.id;
      const idElement = document.createElement('p');
      idElement.textContent = `New ID: ${newId}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
  }
  submitData('John Doe', 'john.doe@example.com');
  