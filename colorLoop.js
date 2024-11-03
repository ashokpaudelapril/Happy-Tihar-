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

function startColorLoop() {
    colorChange("#FFD700", "#510060", 1000)
        .then(() => {
            console.log("Red was completed");
            return colorChange("#FF4500", "#790053", 1000);
        })
        .then(() => {
            console.log("Orange was completed");
            return colorChange("#2C3E50", "#C6095D", 1000);
        })
        .then(() => {
            console.log("Yellow was completed");
            return colorChange("#F39C12", "#F7CD3F", 1000);
        })
        .then(() => {
            console.log("Blue was completed");
            return colorChange("#6A1B9A", "#FD7E21", 1000);
        })
        .then(() => {
            console.log("Pink was completed");
            return colorChange("#FFE4B5", "#0F7926", 1000);
        })
        .then(() => {
            console.log("Green was completed");
            startColorLoop();  // Call the function again to start over
        })
        .catch(() => {
            console.log("Color was not changed");
        });
}

// Start the loop
startColorLoop();