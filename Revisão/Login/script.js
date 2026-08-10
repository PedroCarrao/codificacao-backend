var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const senha = "1234";
const usuario = "admin";

function login(event) {

  event.preventDefault();

  var username = document.getElementsByName('uname')[0].value;
  var password = document.getElementsByName('psw')[0].value;

  console.log('Username:', username);
  console.log('Password:', password);

  if (username === usuario && password === senha) {
    alert('Login successful!');
    modal.style.display = "none"; 
  } else {
    alert('Invalid username or password.');
  }
}