const INPUT = document.getElementById("url");
const BTN = document.getElementById("shorten");
const DISP = document.getElementById("tinyurl-link");

BTN.addEventListener("click", async () => {
  DISP.innerText = "loading...";
  const url = encodeURI(INPUT.value);
  try {
    const res = await fetch(`/shorten?url=${url}`);
    const data = await res.json();
    DISP.innerText = `TinyURL: ${data.tinyurl}`;
  } catch (error) {
    DISP.innerText = "Error. Please try again.";
  }
});

DISP.addEventListener("click", (e) => {
  navigator.clipboard.writeText(e.target.innerText.split(" ")[1]);
});
