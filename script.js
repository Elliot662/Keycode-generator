document.addEventListener("keypress", (event) => {
    console.log(event.key)
    console.log(event.which)
    console.log(event.code)

    document.getElementById("key").innerHTML = event.key
    document.getElementById("which").innerHTML = event.which
    document.getElementById("code").innerHTML = event.code
})
