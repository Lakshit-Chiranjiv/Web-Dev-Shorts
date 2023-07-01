paras = document.querySelector("#paras")
btnGen = document.querySelector("#btn-gen")
btnCopy = document.querySelector("#btn-copy")
btnClear = document.querySelector("#btn-clear")
content = document.querySelector("#content")
error = document.querySelector("#error")
msg = document.querySelector("#msg")

const key = [apiKey]

btnGen.addEventListener("click", async() => {
    let parasVal = paras.value
    if (parasVal < 1 || parasVal > 10) {
        error.innerHTML = "Please enter a number between 1 and 10"
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 3000)
        return
    }

    content.innerHTML = "Loading..."
    paras.value = ""
    let url = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs=' + parasVal
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': key
        }
    })

    let data = await response.json()
    content.innerHTML = data.text
})

btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(content.innerHTML)
    msg.style.display = "block"
    setTimeout(() => {
        msg.style.display = "none"
    }, 3000)
})

btnClear.addEventListener("click", () => {
    content.innerHTML = ""
})