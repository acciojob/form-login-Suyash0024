function getFormvalue() {
    //Write your code here
	const form = document.getElementByID('form1');

	const firtName = form.elements['fname'].value.trim();
	const lastName = form.elements['lname'].value.trim();

	alert(`${firstName} ${lastName}`);

	return false;
	

}
