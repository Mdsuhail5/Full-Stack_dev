interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

type Updateprops = Pick<User, "name" | "age">

type UpdatepropsOptional = Partial<Updateprops>

function update(User: UpdatepropsOptional) {
    console.log(User.name)
    //here the name and age option is opitonal as we use partial for the type updateporps optional
}

update({
    name: "raj"
})
function sumofage(User1: Updateprops, User2: Updateprops) {
    return User1.age + User2.age;
}

const res = sumofage({
    name: "john",
    age: 30
}, {
    name: "doe",
    age: 25
});
console.log(res);

//Readonly- when you have a config object that should not be altered after intialization,
//makeing it readonly ensures that properties cannot be changed

interface config {
    api: string,
    name: string
}

const connect: Readonly<config> = {
    api: "https//:hdal.com",
    name: "something"
}

connect.api = "https//;sdhaa.com"

//readonly example
type u = {
    name: string,
    readonly reload: string
}

const gun: u = {
    name: "ak47",
    reload: "yes"
}
gun.reload = "no"