document.addEventListener("DOMContentLoaded", () => {
    const storedText = localStorage.getItem("storedText");
    const dataElement = document.getElementById("data");
  
    if (storedText) {
      dataElement.textContent = storedText;
    } else {
      dataElement.textContent = "No hay datos guardados.";
    }
  });
  