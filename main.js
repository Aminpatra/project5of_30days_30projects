const btnEl = document.querySelector("button");
const allDivs = document.querySelectorAll("div");

function generateImages() {
  for (let i = 0; i < 5; i++) {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 3000
    )}`;
    div.appendChild(img);
    container.appendChild(div);
  }
}

btnEl.addEventListener("click", () => {
  generateImages();
  // copyFeature();
});

// function copyFeature () {
//   allDivs.forEach((element) => {
//     element.addEventListener("click", function (event) {
//       // Create a textarea element
//       let dummy = document.createElement("textarea");

//       // Assuming event.target is an image or element with a `src` attribute
//       dummy.value = event.target.src || event.target.innerText || ""; // Use the correct property or fallback

//       // Append textarea to the DOM (but keep it hidden)
//       document.body.appendChild(dummy);

//       // Select the content in the textarea
//       dummy.select();

//       // Use Clipboard API to copy to the clipboard
//       navigator.clipboard
//         .writeText(dummy.value)
//         .then(() => {
//           console.log("Content copied to clipboard!");
//           element.classList.add("copied");
//           setTimeout(() => element.classList.remove("copied"), 1000);
//         })
//         .catch((err) => {
//           console.error("Failed to copy content: ", err);
//         });

//       // Clean up: Remove the textarea after copying
//       document.body.removeChild(dummy);
//     });
//   });

// }
