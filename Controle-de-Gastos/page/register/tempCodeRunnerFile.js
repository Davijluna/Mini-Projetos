let space = ' ';
    let recebtor = [];
    
    for (let i = n; i >= 1; i -=1) {
        recebtor+= space
    }
    for (let y = n; y >= 1; y -= 1) {
        let test = recebtor = ' '.repeat(y)
        console.log(test.length)