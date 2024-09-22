document.addEventListener('click', function(event) {

  if (event.target.textContent.includes('審査に送信')) {
    const scriptUrl = 'https://script.google.com/macros/s/xxxx';

    fetch(scriptUrl)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      alert(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

});
