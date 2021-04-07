
    const timer = document.getElementById("counter");
    const heartButton = document.getElementById('heart');
    const numberLikes = document.querySelector(".likes");

    const likeNumbers = {};


    function decrementTimer(){
        let newTimer = parseInt(timer.innerText)
        newTimer -= 1
        timer.innerText = newTimer
    }

    function incrementTimer(){
        let newTimer = parseInt(timer.innerText)
        newTimer += 1
        timer.innerText = newTimer
    }

function automaticallyIncrement(){
    setInterval(incrementTimer, 1000)
}

automaticallyIncrement()

function manuallyIncrement() {
    const plusButton = document.querySelector('#plus')
    plusButton.addEventListener('click', incrementTimer)
}

function manuallyDecrement() {
    const minusButton = document.querySelector('#minus')
    minusButton.addEventListener('click', decrementTimer)
}

manuallyIncrement()
manuallyDecrement()


heartButton.addEventListener('click', likeNumber)

function likeNumber() {

    const currentNumber = counter.innerText;
    console.log("Liking number");
    if (likeNumbers[currentNumber]){
        likeNumbers[currentNumber] += 1;
        document.getElementById(currentNumber).innerText = `${currentNumber} has been liked ${likeNumbers[currentNumber]} times`;
    } else {
        likeNumbers[counter.innerText] = 1;
        numberLikes.innerHTML += `<li id=${currentNumber}>${currentNumber} has been liked ${likeNumbers[currentNumber]} times</li>`
    }
    // function likeNumber(){

}

