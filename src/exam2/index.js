const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var results = [];
var result1;

function async(arg, callback) {
    setTimeout(function () { callback(arg);}, 1200 * Math.random());
}

for (i = 0; i < a.length; i++) {
    async(a[i], (result) => {
        results.push(result);
        results.sort();
        if (results.length == a.length) {
            series();
            parallelScenario();
            parallelLimitScenario();
        }
    })
}

function series() {
    console.log("series")
    results.map((result) => console.log(result));
}

function parallelScenario() {
    console.log("\nparallelScenario")
    let resultParallel = '[ ';
    results.map((result) => resultParallel += result + ' ');
    console.log(resultParallel + " ]");
}

function parallelLimitScenario() {
    console.log("\nparallelLimitScenario")
    let resultParallelLimit = '';
    results.map(function (result, i) {
        if (results[i] % 3 == 0) {
            resultParallelLimit += results[i] + ' \n'
        } else {
            resultParallelLimit += results[i] + ' '
        }
    });
    console.log(resultParallelLimit);
}
