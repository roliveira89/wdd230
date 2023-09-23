// Function to get the current year and update the "currentYear" element
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

// Function to update the "lastModified" element with the document's last modified date
function getLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
}

// Call the functions to update the elements
getCurrentYear();
getLastModified();