const readline = require('readline');


module.exports = function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('输入你的问题，输入andy结束。', (answer) => {
        if (answer === 'andy') {
            rl.close();
        }
        const res = Math.random() > 0.5 ? ':yes' : ':no'
        console.log(answer + res);
    });

}