// Fetching and displaying search results on Search Results page
// ...Previous JavaScript code...

// Fetching and displaying search results on Search Results page
window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const pincode = urlParams.get('pincode');
    if (pincode) {
      const resultsContainer = document.getElementById('results-container');
      fetchPincodeDetails(pincode)
        .then(data => {
          if (data.length > 0 && data[0].Status === "Success") {
            for (const details of data[0].PostOffice) {
              const resultBox = document.createElement('div');
              resultBox.classList.add('result-box');
  
              const resultDetails = document.createElement('div');
              resultDetails.classList.add('result-details');
              resultDetails.textContent = `${details.Pincode}: ${details.Name}, ${details.District}, ${details.State}`;
  
              resultBox.appendChild(resultDetails);
              resultsContainer.appendChild(resultBox);
            }
          } else {
            const p = document.createElement('p');
            p.textContent = 'No results found.';
            resultsContainer.appendChild(p);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
  
  // ...Previous JavaScript code...
  
  
  // Fetch pincode details from API
  function fetchPincodeDetails(pincode) {
    const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to fetch pincode details.');
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  }
  