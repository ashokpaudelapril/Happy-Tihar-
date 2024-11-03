const h1 = document.querySelector("h1");
const div = document.querySelector("div");
const p = document.querySelector("p")


// Modify the colorChange function to accept background and text colors
function colorChange(bgColor, textColor, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = bgColor;
            p.style.color = textColor;
            resolve("color changed");
        }, delay);
    });
}

function getRandomColor() {
  // Generate a random hexadecimal color code
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

async function startColorLoop() {
    await colorChange(getRandomColor(), getRandomColor(), 1000);
    await startColorLoop();
}

// Start the loop
startColorLoop();