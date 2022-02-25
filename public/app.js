const loadRandomName = (resultDiv) => {
  console.log("inside clic");
  fetch("http://18.223.44.5:5001/random-name")
    .then((response) => response.json())
    .then((result) => {
      resultDiv.classList.add("alert", "alert-success");
      resultDiv.innerHTML = `<h2>
          ${result.first_name} ${result.last_name}
        </h2>`;
    });
};
