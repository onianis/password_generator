uppercaseSwitch = document.getElementById("uppercaseChk");
numbersSwitch = document.getElementById("numbersChk");
specialsSwitch = document.getElementById("specialsChk")
lengthSlider = document.getElementById("lengthSlider")
lengthSliderValue = document.getElementById("lengthSliderValue");
generateBtn = document.getElementById("generateBtn");
resultIndicatorLabel = document.getElementById("resultIndicatorLabel");
resultLabel = document.getElementById("resultLabel");
resultLabelContainer = document.getElementById("resultLabelContainer");

let lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
let uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVXZYZ";
let numbersStr = "1234567890";
let specialsStr = "!@#$%^&*()_-+={[}}|:;\"'<>,.?/`";
let uppercaseSlc = false, numbersSlc = false, specialsSlc = false, desiredLen = 0, generatedPass = "";

let charPool = [...lowercaseStr];


lengthSliderValue.textContent = String(lengthSlider.value);
resultLabel.textContent = "";
resultIndicatorLabel.style.visibility = "hidden";
resultLabelContainer.style.visibility = "hidden";

lengthSlider.oninput = function () {
    lengthSliderValue.textContent = String(lengthSlider.value);
}

generateBtn.onclick = function () {
    charPool = [...lowercaseStr]
    desiredLen = Number(lengthSlider.value);
    resultLabel.textContent = "";
    generatedPass = "";
    resultLabelContainer.style.visibility = "visible";
    resultIndicatorLabel.style.visibility = "visible";

    if (uppercaseSwitch.checked) charPool.push(...uppercaseStr);
    if (numbersSwitch.checked) charPool.push(...numbersStr);
    if (specialsSwitch.checked) charPool.push(...specialsStr);

    for (let i = 0; i < desiredLen; i++) {
        let index = Math.floor(Math.random() * (charPool.length - 1));
        generatedPass += charPool[index];

    }

    resultLabel.textContent = generatedPass;
}


