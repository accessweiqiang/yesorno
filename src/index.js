const readline = require('readline');


module.exports = function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '请输入> '
    });
    rl.prompt();
    rl.on('line', (line) => {
        const res = Math.random() > 0.5 ? 'YES' : 'NO';
        console.log(`你输入的是：'${line.trim()}'\n答案是:${res}`);
        rl.prompt();
    }).on('close', () => {
        console.log('再见!');
        process.exit(0);
    });
}