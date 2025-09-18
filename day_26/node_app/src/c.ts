interface User {
    firstname: string;
    lastname: string;
    age: number;
    email?: string;
}

function isLegalAge(user: User): boolean {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }

}

isLegalAge({
    firstname: "John",
    lastname: "Doe",
    age: 20,
    email: "asd@asd.com"
})