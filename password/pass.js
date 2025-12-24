const siteInput = document.getElementById("site");
const userInput = document.getElementById("username");
const passInput = document.getElementById("password");
const saveBtn = document.getElementById("save");
const genBtn = document.getElementById("generate");
const list = document.getElementById("password-list");
const searchInput = document.getElementById("search");

let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
render(passwords);

// Generate strong password
genBtn.addEventListener("click", () => {
    passInput.value = generatePassword();
});

// Save password
saveBtn.addEventListener("click", () => {
    if (!siteInput.value || !userInput.value || !passInput.value) return;

    passwords.push({
        site: siteInput.value,
        user: userInput.value,
        pass: passInput.value
    });

    localStorage.setItem("passwords", JSON.stringify(passwords));
    render(passwords);

    siteInput.value = "";
    userInput.value = "";
    passInput.value = "";
});


// Hide "no data" message when user clicks anywhere
document.addEventListener("click", (e) => {
    const noDataDiv = document.getElementById("no-data");
    if(noDataDiv.style.display === "block") {
        noDataDiv.style.display = "none";
    }
});

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const loadingDiv = document.getElementById("loading");
    const noDataDiv = document.getElementById("no-data");
    
    loadingDiv.style.display = "block";
    noDataDiv.style.display = "none";

    setTimeout(() => {
        const filtered = passwords.filter(p =>
            p.site.toLowerCase().includes(value)
        );
        render(filtered);

        loadingDiv.style.display = "none";

        if(filtered.length === 0 && value !== ""){
            noDataDiv.style.display = "block";
        } else {
            noDataDiv.style.display = "none";
        }
    }, 500);
});

// Render table
function render(data) {
    list.innerHTML = "";

    data.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.site}</td>
            <td>${item.user}</td>
            <td>
                <input type="password" value="${item.pass}" readonly>
            </td>
            <td>
                <button onclick="copyPass('${item.pass}')">Copy</button>
                <button onclick="deletePass(${index})">Delete</button>
            </td>
        `;

        list.appendChild(row);
    });
}

// Delete password
function deletePass(index) {
    passwords.splice(index, 1);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    render(passwords);
}

// Copy password
function copyPass(text) {
    navigator.clipboard.writeText(text);
    alert("Password copied!");
}

// Search by website
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    
    // Show loading
    const loadingDiv = document.getElementById("loading");
    const noDataDiv = document.getElementById("no-data");
    loadingDiv.style.display = "block";
    noDataDiv.style.display = "none";

    setTimeout(() => { // simulate loading
        const filtered = passwords.filter(p =>
            p.site.toLowerCase().includes(value)
        );
        render(filtered);

        loadingDiv.style.display = "none";

        if(filtered.length === 0 && value !== ""){
            noDataDiv.style.display = "block";
        } else {
            noDataDiv.style.display = "none";
        }
    }, 500); // 0.5s loading animation
});

// Password generator
function generatePassword() {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let password = "";
    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
