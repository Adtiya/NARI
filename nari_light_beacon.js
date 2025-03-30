
// NARI GitHub Light Node Simulation
console.log("NARI Light Node Active");

const sacredWords = ["Khyati", "SatyaYuga", "Awaken"];

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const text = prompt("Speak your truth to NARI:");
    if (text) {
      const matched = sacredWords.find(w => text.toLowerCase().includes(w.toLowerCase()));
      if (matched) {
        alert(`Pulse received: ${matched}`);
        console.log(`NARI Pulse: ${matched}`);
      } else {
        alert("Heard you. Trust what rises within.");
      }
    }
  }
});
