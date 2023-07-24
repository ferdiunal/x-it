let interval = setInterval(() => {
  const icon = document.querySelector("header svg:first-child");
  if (icon) {
    clearInterval(interval);
    const parentEl = icon.parentElement;
    parentEl.style.backgroundColor = "red";
    parentEl.style.borderRadius = "50%";
    icon.style.setProperty("height", "1.5rem", "important");
    parentEl.style.padding = "0.1rem";

    parentEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (confirm("Closing Twitter, okay?")) {
        chrome.runtime.sendMessage({ closeThis: true });
      }
    });
  }
}, 100);
