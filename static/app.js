const INPUT = document.getElementById("url");
const FORM = document.getElementById("url-form");
const BTN_LABEL = document.getElementById("btn-label");
const LINK_BAR = document.getElementById("link-bar");
const DISP = document.getElementById("tinyurl-link");
const COPY = document.getElementById("copy");
const REFRESH = document.getElementById("refresh");

FORM.addEventListener("submit", async (e) => {
  e.preventDefault();
  LINK_BAR.classList.remove("invisible");

  if (!INPUT.value || !INPUT.checkValidity()) {
    DISP.innerText = "Invalid input.";
    return;
  }
  DISP.innerText = "Loading...";
  BTN_LABEL.innerHTML = "";
  BTN_LABEL.classList.add("loader");
  const url = encodeURI(INPUT.value);
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    DISP.innerText = data?.tinyurl;
  } catch (error) {
    DISP.innerText = "Error. Please try again.";
  } finally {
    BTN_LABEL.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
  </svg>
  `;
    BTN_LABEL.classList.remove("loader");
  }
});

DISP.addEventListener("click", (e) => {
  navigator.clipboard.writeText(e.target.innerText);
});

COPY.addEventListener("click", (e) => {
  navigator.clipboard.writeText(DISP.innerText);
});

REFRESH.addEventListener("click", (e) => {
  LINK_BAR.classList.add("invisible");
  INPUT.value = "";
  INPUT.focus();
});
