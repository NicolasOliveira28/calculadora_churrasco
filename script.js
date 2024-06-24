function calcular() {
  const homens = parseInt(document.getElementById("homens").value);
  const mulheres = parseInt(document.getElementById("mulheres").value);
  const criancas = parseInt(document.getElementById("criancas").value);

  const carneBovina = homens * 500 + mulheres * 300 + criancas * 200;
  const frango = homens * 200 + mulheres * 200 + criancas * 100;
  const linguica = homens * 200 + mulheres * 200 + criancas * 200;
  const refrigerante = homens * 300 + mulheres * 400 + criancas * 200;
  const cerveja = homens * 800 + mulheres * 500;

  document.getElementById("resultado").innerHTML = `
        <h3>Quantidades Necessárias:</h3>
        <p>Carne Bovina: ${carneBovina / 1000} kg</p>
        <p>Frango: ${frango / 1000} kg</p>
        <p>Linguiça: ${linguica / 1000} kg</p>
        <p>Refrigerante: ${refrigerante / 1000} L</p>
        <p>Cerveja: ${cerveja / 1000} L</p>
    `;
}
