const axios = require("axios")
//things to care about
//change request method
//send body
//send header


function main() {
    fetch("server")
        .then(async (response) => {
            const res = await respose.json();
            console.log(res)
        })
}


async function main2() {
    const response = await fetch("server");
    const json = await response.json()
    console.log(json)
}
//using axios
async function main2() {
    const response = await axios.get("server");
    console.log(response.data)
}

//to change the method
async function main2() {
    const response = await fetch("server", {
        method: "POST"
    });
    const json = await response.json()
    console.log(json)
}

async function main2() {
    const response = await axios.post("server");
    console.log(response.data)
}


//to add headers and body
async function main2() {
    const response = await fetch("server",
        {
            method: "POST",
            body: {
                username: "raj",
                password: "nanana"
            },
            headers: {
                "Authorization": "Bearer 123"
            }
        });
    const json = await response.json()
    console.log(json)
}


async function main2() {
    const response = await axios.get("https://httpdump.app/dumps/d6ab3634-6fbf-41cd-bcf8-4339ec7dabde",
        {
            username: "raj",
            password: "nanana"
        },
        {
            headers: {
                "Authorization": "Bearer 123"
            }
        }
    );
    console.log(response.data)
}

main2();