interface Person {
    name: string,
    age: number,
    greet(phrase: string): void,
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n,
            this.age = a,
    }
    greet(phrase: string): void {
        console.log('${phrase} ${this.name}');
    }
}



enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keypress: Direction) {
    if (keypress = Direction.Up) {
        console.log("Move up")
    }
    if (keypress = Direction.Down) {
        console.log("Move Down")
    }
}


enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
    res.status(ResponseStatus.Error).json({})
}
// and so on...
res.status(ResponseStatus.Success).json({});
})