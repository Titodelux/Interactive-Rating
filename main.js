let body_Card = document.querySelector(".bodyCard")
let card_Rating = document.querySelector(".cardRating")
let submit = document.querySelector(".submit")


function thankyou(rating){
    if(rating === null){console.log("NO PASES")}
    else{body_Card.classList.add("thankyouCard")
    body_Card.innerHTML = `
        <img src="./images/illustration-thank-you.svg" alt="thankyou">
        <div class="containerStar">
            <div class="cardStar">
                <p>You selected ${rating} out of 5</p>
            </div>
        </div>
        <h2 class="cardHeader">Thank you!</h2>
        <p class="cardInfo">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    `
    }
}

let rating = null

card_Rating.addEventListener("click",function(e){
    let hijo = e.target.textContent
    for (const child of card_Rating.children) {
        if (child.textContent === hijo){
            child.classList.add("activateState")
            rating = hijo
        }
        else{child.classList.remove("activateState")}
    }
})

submit.addEventListener("click", function(){
    if(rating){thankyou(rating)}
    else{alert("Por favor valoranos!")}
})