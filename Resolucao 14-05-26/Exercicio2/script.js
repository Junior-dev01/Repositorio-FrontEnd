const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');


celsiusInput.addEventListener('input', () => {
    const c = parseFloat(celsiusInput.value);
    
    if (!isNaN(c)) {
        const f = (c * 9/5) + 32;
        fahrenheitInput.value = f.toFixed(2);
    } else {
        fahrenheitInput.value = "";
    }
});


fahrenheitInput.addEventListener('input', () => {
    const f = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(f)) {
        const c = (f - 32) * 5/9;
        celsiusInput.value = c.toFixed(2);
    } else {
        celsiusInput.value = "";
    }
});