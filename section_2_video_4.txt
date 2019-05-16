fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json)
    });


const fetchPost1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const fetchPost2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
const fetchPost3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

Promise.all([fetchPost1, fetchPost2, fetchPost3])
    .then(() => {
        console.log('done');
    });


function* infiniteLoop() {
    let i: number = 0;

    while (true) {
        yield i++;
    }
}

const iLoop = infiniteLoop();
console.log(iLoop.next());
console.log(iLoop.next());
console.log(iLoop.next());


