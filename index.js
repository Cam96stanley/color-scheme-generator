fetch("https://www.thecolorapi.com/scheme?hex=000000&mode=analogic")
  .then((res) => res.json())
  .then((data) => console.log(data));
