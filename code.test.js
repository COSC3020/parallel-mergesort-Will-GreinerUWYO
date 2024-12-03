const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

(async function runTests() {
    try {
        let test1 = [];
        let expected1 = [];
        await mergesort(test1);
        if (JSON.stringify(test1) !== JSON.stringify(expected1)) {
            throw new Error('test 1 failed');
        }

        let test2 = [5];
        let expected2 = [5];
        await mergesort(test2);
        if (JSON.stringify(test2) !== JSON.stringify(expected2)) {
            throw new Error('test 2 failed');
        }

        let test3 = [1, 2, 3, 4, 5];
        let expected3 = [1, 2, 3, 4, 5];
        await mergesort(test3);
        if (JSON.stringify(test3) !== JSON.stringify(expected3)) {
            throw new Error('test 3 failed');
        }

        let test4 = [5, 4, 3, 2, 1];
        let expected4 = [1, 2, 3, 4, 5];
        await mergesort(test4);
        if (JSON.stringify(test4) !== JSON.stringify(expected4)) {
            throw new Error('test 4 failed');
        }

        let test5 = [38, 27, 43, 3, 9, 82, 10];
        let expected5 = [3, 9, 10, 27, 38, 43, 82];
        await mergesort(test5);
        if (JSON.stringify(test5) !== JSON.stringify(expected5)) {
            throw new Error('test 5 failed');
        }

        let test6 = [5, 1, 5, 2, 5];
        let expected6 = [1, 2, 5, 5, 5];
        await mergesort(test6);
        if (JSON.stringify(test6) !== JSON.stringify(expected6)) {
            throw new Error('test 6 failed');
        }

        console.log("all tests passed");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
})();
