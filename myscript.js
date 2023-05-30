
const questions = [
    {
        'q': "Which of the following is markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "PHP",
        'correct': "a",
    },
    {
        'q': "When was the JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'q': "What does CSS stand for?",
        'a': "Hyper Markup language",
        'b': "Cascading Style Sheet",
        'c': "Code Scinece Social",
        'd': "Central Socied Sawabi",
        'correct': "b",
    }
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let questionBox = document.getElementById('quesBox');
let optionInputs = document.querySelectorAll(".options")

let loadQuestion = () => {
    if(index === total){
        endQuiz();
    }
    reset();
  const data = questions[index];
  questionBox.innerText = data.q;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}

let submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right ++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

let getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

let reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;

        }
    )
}

let endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    Thank you for  playing the quiz. You got ${right} out of ${total}
    </div>`;
    
}
loadQuestion();





