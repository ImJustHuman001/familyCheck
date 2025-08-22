
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const statusBtn = document.getElementById("statusButton");
const result = document.getElementById("result");

statusBtn.onclick = function() {
    let childName = nameInput.value;
    let childAge = Number(ageInput.value);

    if (childName === "Chisom" && childAge === 24) {
        result.textContent = `You are Welcome, Chisom!`;
    } else if(childName === "Ikechukwu" && childAge === 22) {
        result.textContent = `You are Welcome, Ikechukwu!`;
    } else if(childName === "Kenechukwu" && childAge === 20) {
        result.textContent = `You are Welcome, Kenechukwu!`;
    } else if(childName === "Kosisochukwu" && childAge === 16) {
        result.textContent = `You are Welcome, Kosisochukwu!`;
    } else {
        result.textContent = `You are not an Onah!`;
    }
}
