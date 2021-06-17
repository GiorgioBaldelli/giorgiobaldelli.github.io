console.log("hello")

function hasNetwork(online) {
    const element = document.querySelector(".centered");
    // Update the DOM to reflect the current status
    if (online) {
            document.querySelector(".offline").classList.add("hide");
            document.querySelector(".online").classList.remove("hide");
        } else {
            document.querySelector(".online").classList.add("hide");
            document.querySelector(".offline").classList.remove("hide");
    }
  }

  window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);
  
    window.addEventListener("online", () => {
      // Set hasNetwork to online when they change to online.
      hasNetwork(true);
    });
  
    window.addEventListener("offline", () => {
      // Set hasNetwork to offline when they change to offline.
      hasNetwork(false);
    });
  });
  