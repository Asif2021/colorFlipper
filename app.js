const getColor = () =>{
    // HEX Code 
    const ranumNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + ranumNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color_code').innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}
getColor();