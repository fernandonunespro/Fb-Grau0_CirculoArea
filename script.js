function calcularArea() {
  
  let raio = document.getElementById("raio").value;
  let resultado = document.getElementById("resultado");

  let area = Math.PI * raio ** 2;
  resultado.value = area.toFixed(2);
}
