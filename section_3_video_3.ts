class QueueNumber {
    private data: number[] = [];

    push = (item: number): void => {
        this.data.push(item);
    };

    pop = (): void => {
        this.data.shift();
    };
}

const queue = new QueueNumber();

queue.push(0);
queue.push(10);
queue.push(5);
queue.push(3);

class Queue<T> {
    private data: T[] = [];

    push = (item: T): void => {
        this.data.push(item);
    };

    pop = (): void => {
        this.data.shift();
    };
}

const stringQueue = new Queue<string>();

stringQueue.push('0');

const numberQueue = new Queue<number>();
numberQueue.push(1);