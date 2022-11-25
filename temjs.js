const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp)
    const temp_select = document.getElementById('temp_diff');
    const valuetemp = temp_diff.options[temp_select.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const fahToCel = (fahr) => {
        let celsius = Math.round((fahr - 32) * 5 / 9);
        return celsius;
    }

    let result;

    if (valuetemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = result;
        document.getElementById('data').innerHTML = "fahrenheit";


    } else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = result;
        document.getElementById('data').innerHTML = "celsius";

    }


}