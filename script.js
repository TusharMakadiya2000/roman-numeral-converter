// document.getElementById("convert-btn").addEventListener("click", function () {
//     const numInput = document.getElementById("number");
//     const outputElement = document.getElementById("output");
//     const number = parseInt(numInput.value);

//     if (isNaN(number)) {
//         outputElement.textContent = "Please enter a valid number";
//     } else if (number < 1) {
//         outputElement.textContent =
//             "Please enter a number greater than or equal to 1";
//     } else if (number >= 4000) {
//         outputElement.textContent =
//             "Please enter a number less than or equal to 3999";
//     } else {
//         outputElement.textContent = toRoman(number);
//     }
// });

// function toRoman(num) {
//     const romanNumerals = [
//         { value: 1000, numeral: "M" },
//         { value: 900, numeral: "CM" },
//         { value: 500, numeral: "D" },
//         { value: 400, numeral: "CD" },
//         { value: 100, numeral: "C" },
//         { value: 90, numeral: "XC" },
//         { value: 50, numeral: "L" },
//         { value: 40, numeral: "XL" },
//         { value: 10, numeral: "X" },
//         { value: 9, numeral: "IX" },
//         { value: 5, numeral: "V" },
//         { value: 4, numeral: "IV" },
//         { value: 1, numeral: "I" },
//     ];

//     let result = "";
//     for (let i = 0; i < romanNumerals.length; i++) {
//         while (num >= romanNumerals[i].value) {
//             result += romanNumerals[i].numeral;
//             num -= romanNumerals[i].value;
//         }
//     }

//     return result;
// }

const form = document.getElementById("form");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
    const ref = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];
    const res = [];

    ref.forEach(function (arr) {
        while (num >= arr[1]) {
            res.push(arr[0]);
            num -= arr[1];
        }
    });

    return res.join("");
};

const isValid = (str, int) => {
    let errText = "";

    if (!str || str.match(/[e.]/g)) {
        errText = "Please enter a valid number.";
    } else if (int < 1) {
        errText = "Please enter a number greater than or equal to 1.";
    } else if (int > 3999) {
        errText = "Please enter a number less than or equal to 3999.";
    } else {
        // No errors detected
        return true;
    }

    // Handle error text and output styling
    output.innerText = errText;
    output.classList.add("alert");

    return false;
};

const clearOutput = () => {
    output.innerText = "";
    output.classList.remove("alert");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    updateUI();
});

convertButton.addEventListener("click", () => {
    updateUI();
});

const updateUI = () => {
    const numStr = document.getElementById("number").value;
    const int = parseInt(numStr, 10);

    output.classList.remove("hidden");

    clearOutput();

    if (isValid(numStr, int)) {
        output.innerText = convertToRoman(int);
    }
};
