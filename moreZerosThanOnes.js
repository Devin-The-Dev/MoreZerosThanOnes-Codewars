function moreZeros(s) {
    console.log(s);
    let value = [];
    for (var i = 0; i < s.length; i++) {
        let zeros = 0;
        let ones = 0;
        console.log(s[i] + ": " + s[i].charCodeAt(0).toString(2));
        let sequence = s[i].charCodeAt(0).toString(2);
        for (j = 0; j < sequence.length; j++) {
            if (sequence[j] == 0) {
                zeros += 1;
            } else {
                ones += 1;
            }
        }
        console.log("Zeros: " + zeros);
        console.log("Ones: " + ones);
        if (zeros > ones) {
            value.push(s[i]);
        }
    }
    //   if value has duplicates, skip the duplicate
    let unique = [...new Set(value)];
    return unique;
}