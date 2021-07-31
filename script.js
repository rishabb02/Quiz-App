var question = document.getElementById("Question")
var True = document.getElementById("trueAnswer")
var False = document.getElementById("falseAnswer")
var button = document.getElementById("button")
var myQuestions = [{question: "Is the Earth flat?", answer: "False"}, {question: "Are polar bears white?", answer: "True"}]

question.innerHTML = myQuestions[0].question


var usersAnswer 


True.addEventListener("change", (e) => {
    var value = e.target.value
    usersAnswer = value
} )

False.addEventListener("change", (e) => {
    var value = e.target.value
    usersAnswer = value
})

button.addEventListener("click", () => {
    if(usersAnswer === myQuestions[0].answer){
        console.log("Correct")
    }
    else {
        console.log("Incorrect")
    }
    myQuestions.shift()
    question.innerHTML = myQuestions[0].question
})
