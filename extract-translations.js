let exec = require("child_process").exec;
const fs = require("fs");

const  languages  = JSON.parse(fs.readFileSync('./src/Languages.json', 'utf8'));

let LanguagesExecute = `ngx-translate-extract -i ./src -o ${languages.Languages.map((language) => './src/i18n/' + language.lang +'.json').join(' ')} -d -s -f namespaced-json`;


exec(LanguagesExecute, (err, stdout, stderr)=>{
    if (err) {
        throw new Error(err);
    }
    console.log(stdout);
    console.error(stderr);
});