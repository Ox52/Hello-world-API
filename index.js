function greet() {
  console.log("dada");
  const language = document.getElementById("language").value;
  fetch(`http://localhost:5000/hello?language=${language}`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("greet").innerText = data;
    })
    .catch((err) => {
      console.log("error occur");
    });
}
