function getFormvalue() {
  const form = document.getElementById('form1');

  let firstName = form.elements['fname'].value.trim();
  let lastName = form.elements['lname'].value.trim();

  alert(`${firstName} ${lastName}`);

  return false; // Prevents form from refreshing the page
}
