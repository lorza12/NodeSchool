const fs = require('fs');
const info = fs.readFileSync(process.argv[2], 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
});
validateData(info);
function validateData(info) {
    let count = (info.match(/\n/g) || []).length;
    console.log(count);
}