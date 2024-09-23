document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");
  
    buttonText.addEventListener("click", () => {
      const text = inputText.value;
      localStorage.setItem("storedText", text);
      alert("Dato guardado en localStorage");
    });
  });
  