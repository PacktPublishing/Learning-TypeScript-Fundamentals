const luckyNumberPromise: Promise<number> = new Promise((resolve, reject) => {
    resolve(7);
});

async function addToLuckyNumber(num: number): Promise<number> {
    const luckyNumber = await luckyNumberPromise;

    return luckyNumber + num;
}

addToLuckyNumber(2)
    .then((value) => {
        console.log(value);
    });

