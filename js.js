let navbar = document.body.querySelector("nav")

window.onscroll = function() {
    if (scrollY > 430){
        navbar.style.transistion = "2s"
        navbar.style.height = "80px"
    }else{
        navbar.style.height = "90px"
    }
}


let content = document.querySelector(".content4")
let div = document.querySelector(".inputs")



function submit() {
    document.head.appendChild(div)

    let thanks = document.createElement("h1")
    content.appendChild(thanks)

    
    thanks.style.transistion = "0.5s"
    thanks.innerHTML = "THANKS FOR YOUR FEEDBACK!"
    thanks.style.paddingLeft = "695px"
    thanks.style.color = "yellow"
    thanks.style.paddingBottom = "100px"
    thanks.style.position = "relative"
    thanks.style.left = "82px"
    thanks.style.bottom = "191px"

    function reappear(){
        content.appendChild(div)
        document.head.appendChild(thanks)
    }

    setTimeout(reappear,5000)
}

function learnMore() {
    alert("Were sorry, This part of the website has not been created yet")
}

let click = document.getElementById("click-here")
let don = document.querySelector(".donate")
let asd = document.getElementById("ok12")
let donateButton = document.getElementById("donate-button")

function changeOnceLoaded() {
    document.head.appendChild(don)
}

setTimeout(changeOnceLoaded,100)

function clicked() {
    document.body.appendChild(don)
}

function closeIt() {
    document.head.appendChild(don)
}

function submitDonate() {
    document.head.appendChild(asd)
    let x = document.createElement("h1")
    don.appendChild(x)
    document.head.appendChild(donateButton)

    x.innerHTML = "THANKS FOR YOUR DONATION!"
    x.style.color = "yellow"
    x.style.fontSize = "40px"
    x.style.width = "25%"
    x.style.textAlign = "center"
    x.style.paddingLeft = "241px"

    function reappear2() {
        don.appendChild(asd)
        don.appendChild(donateButton)
        document.head.appendChild(x)
    }

    setTimeout(reappear2,5000)
}