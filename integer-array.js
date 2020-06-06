

// imports
const fs = require("fs");
const path = require("path");

// setup
const options = { withFileTypes: true };


// off we go...
createArray();

////////////

function createArray(file) {

    fs.readFile('IntegerArray.txt', 'utf8', (err, data) => {
        const lines = data.split("\n");
        let output = [];

        lines.forEach((line) => {
          output.push(Number(line));
        });

        fs.writeFile('ia.js', JSON.stringify(output), (err) => {
            if (err) console.log(err);

            console.log("formatted and copied file to ia.js");
        });
    });
}