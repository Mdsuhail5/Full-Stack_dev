
function main() {
    fetch("server")
        .then(async (response) => {
            const res = await respose.json();
            console.log(res)
        })
}

main();