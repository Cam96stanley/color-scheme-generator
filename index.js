const seed = document.getElementById("color-seed");
const schemeType = document.getElementById("scheme-type");
const colorContainer = document.getElementById("color-container");

document.getElementById("color-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const seedColor = seed.value.replace(/^#/, "");
  const colorScheme = schemeType.value;
  const colorCount = 5;
  let html = "";

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorScheme}&count=${colorCount}`
  )
    .then((res) => res.json())
    .then((data) => {
      let colors = [];
      for (let i = 0; i < data.colors.length; i++) {
        colors.push(data.colors[i].hex.value);
      }
      colors.forEach(function (color) {
        html += `
        <div class="color-item">
          <div class="color-div" style="background-color:${color}"></divclass=style=>
          <p class="color-hex">${color}</p>
        </div>`;
      });
      colorContainer.innerHTML = html;
    });
});
