const inputName = document.getElementById('text-input');
const buttonBtn = document.getElementById('btn');
const showResult = document.getElementById('result');

var getCountryName = new Intl.DisplayNames(['en'], {type: 'region' });

buttonBtn.addEventListener("click", async (e) => {
e.preventDefault()
showResult.innerHTML = ""
const name = inputName.value;
if (name === "") {
    showResult.textContent = "Re-enter name"
    return;
}
const originalBtnText = buttonBtn.textContent;
buttonBtn.textContent = `Loading...`
buttonBtn.disabled = true;

try {
    const response = await fetch("https://api.nationalize.io/?name=${name}");
    const result = await response.json();

    inputName.value = "";

    if (result.country && result.country.length > 0) {
        const top = result.country[0];
        const percent = top.probability * 100;
        showResult.textContent = `${name} is ${top.country_id} with ${percent}% certainty`;
    } else {
        showResult.textContent = `${name} is not found in any country`
    }
} 
catch (e) {
    showResult.textContent = "Reached the API request limit"
} finally {
    buttonBtn.textContent = originalBtnText;
    buttonBtn.disabled = false;
}
})
