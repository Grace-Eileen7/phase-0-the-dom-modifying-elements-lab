// Write your code here!
// Remove the <main id="main"> element from the DOM
const main = document.getElementById("main");
main.remove();

// Create a new <div> and assign it to a variable
const newHeader = document.createElement("h1");

// Give the <h1> an id of 'victory'
newHeader.id = "victory";

// Set its text content to show your name is the champion
newHeader.textContent = "Grace is the champion";

// Append it to the body (so it appears on the page)
document.body.append(newHeader);
