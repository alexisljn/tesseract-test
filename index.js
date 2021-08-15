const Tesseract = require("tesseract.js");
const fs = require('fs');

(async () => {
    const directoryContent = fs.readdirSync('./src');
    // console.log("directoryContent", directoryContent);

    for (const file of directoryContent) {
        if (file !== ".gitkeep") {
            const result = await Tesseract.recognize(`./src/${file}`, 'fra', {logger: m => console.log(m)});
            fs.appendFile('questions.txt', result.data.text, function (err) {
                if (err) throw err;
                console.log('Saved!');
            })
        }
    }

})();



