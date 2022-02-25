const loadRandomName = (resultDiv) => {
  console.log("inside clic");
  fetch("http://localhost:5000/random-name")
    .then((response) => response.json())
    .then((result) => {
      resultDiv.classList.add("alert", "alert-success");
      resultDiv.innerHTML = `<h2>
          ${result.first_name} ${result.last_name}
        </h2>`;
    });
};
