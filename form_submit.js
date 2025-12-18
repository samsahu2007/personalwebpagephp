const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const form=e.target;
  const submitBtn = document.getElementById("submitBtn");
  const loader = document.getElementById("loader");
  
  loader.style.display = "inline-block";
  submitBtn.disabled = true;
  submitBtn.value = "Please wait...";

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert(data.message);
      window.location.href = data.redirect;
    } else {
      alert(data.message || 'Something went wrong');
    }
  })
  .catch(error => {
    console.error(error);
    alert('Network error. Please try again.');
  })
  .finally(() => {
    loader.style.display = "none";
    submitBtn.disabled = false;
    submitBtn.value = "Submit";
  });
});
