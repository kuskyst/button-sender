document.addEventListener('click', function(event) {
  alert(event.target.textContent);

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxSSCSTA50TE7k_VgO_r-VJr768tL6zokLViSJNYzuMbFSV5_FAN43Uls6cYw5kk6Uw2A/exec?action=greet';

  fetch(scriptUrl)
  .then(response => response.text())
  .then(data => {
    console.log(data);
    alert(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

});
