document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value.trim();

  if (!firstName || !lastName || !gender || !email || !dob || !phone) {
    alert("All fields are required!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  if (!validatePhone(phone)) {
    alert("Please enter a valid phone number (10 digits)!");
    return;
  }

  alert("Form submitted successfully!");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
}
