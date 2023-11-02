let quizData = [
  {
    question: "What is the next number in this sequence: 2, 4, 8, 16, ___?",
    options: ["18", "28", "32", "42"],
    answer: "32",
  },
  {
    question: "If you rearrange the letters CMLAE, you'll get the name of which animal?",
    options: ["Cemal", "Alcme", "Camel", "Melca"],
    answer: "Camel",
  },
  {
    question: "Which of the following words is the odd one out: apple, orange, banana, grape?",
    options: ["Banana", "Apple", "Grape", "Orange"],
    answer: "Grape",
  },
  {
    question: "If all the red balls are green, all the green balls are blue, and all the blue balls are red, what color is a green ball?",
    options: ["Red", "Blue", "Greenish-blue", "Orange"],
    answer: "Blue",
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "8", "10", "6"],
    answer: "6",
  },
  {
    question: "What comes next in this sequence: J, F, M, A, M, ___? Hint (The first letter of each month)",
    options: ["J-J-A-S-O-N-M", "J-J-A-S-O-N-D", "J-J-U-S-O-N-D", "J-J-A-S-O-M-D"],
    answer: "J-J-A-S-O-N-D",
  },
  {
    question: "If a plane crashes on the border of the United States and Canada, where do you bury the survivors?",
    options: ["Their home country", "US", "Canada", "You-don't-bury-survivors"],
    answer: "You-don't-bury-survivors",
  },
  {
    question: "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
    options: ["Wood", "Ink", "Pencil-lead/graphite", "Book"],
    answer: "Pencil-lead/graphite",
  },
  {
    question: "Which number logically follows this series: 1, 4, 9, 16, ___?",
    options: ["26", "25", "35", "40"],
    answer: "25",
  },
  {
    question: "How many total letters are there in the English alphabet?",
    options: ["24", "25", "26", "27"],
    answer: "26",
  },
  {
    question: "If you have two apples and you take away one, how many apples do you have left?",
    options: ["One", "Two", "Nothing", "More"],
    answer: "One",
  },
  {
    question: "What is the missing number in this sequence: 3, 6, 12, 24, ___?",
    options: ["42", "44", "46", "48"],
    answer: "48",
  },
  {
    question: "What is the capital of Nigeria?",
    options: ["Uyo", "Eket", "Abuja", "Akwa-ibom"],
    answer: "Abuja",
  },
  {
    question: "I am a three-digit number. My tens digit is five more than my ones digit, and my hundreds digit is eight less than my tens digit. What number am I?",
    options: ["190", "193", "183", "180"],
    answer: "193",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Earth", "Pluto", "Venus", "Mars"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Gorilla", "Anaconda", "The-blue-whale", "Octopus"],
    answer: "The-blue-whale",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "7", "9", "12"],
    answer: "7",
  },
  {
    question: "What is the square root of 144?",
    options: ["12", "22", "21", "24"],
    answer: "12",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["James Carter", "Ben Carson", "Tyler Perry", "William-Shakespeare"],
    answer: "William-Shakespeare",
  },
  {
    question: "What do you think about my quiz?",
    options: ["Difficult", "Easy", "Educative", "Non-educational"],
    answer: "Educative",
  },
];

let quizQuest = document.querySelector(".quiz-quest");

function testApp() {
  let corrects = 10;
  let wrong = 0;
  let result = 0;

  let quizInArray = quizData.map((quiz, index) => {
    return `<div class="row my-3 py-2 justify-content-between bg-white rounded">
              <div class="left col-6 my-3 shadow bg-white text-dark container-sm rounded py-2 opacity-75">
                <div class="d-flex ">
                <p class="col-1">${index + 1}</p>
                <p class="question" style="font-size: 20px">${quiz.question}</p>
                </div>
                <select name="" id="select-item" class="w-100 py-2 border-0 bg-dark text-white form-select-sm">
                  <option value="" select-disabled>Select an answer</option>
                  ${quiz.options.map((option) => {
                    return `<option value=${option}>${option}</option>`;
                  })}
                </select>
              </div>
              <div class="right col-5  shadow rounded bg-dark container-sm opacity-75 ">
                <p class="selected">Selected answer:</p>
                <p class="correct">Correct answer:</p>
                <p class="status text-answer">Answer:</p>
              </div>
            </div>`;
  });

  quizQuest.innerHTML = quizInArray.join(" ");

  let selectElement = document.querySelectorAll("select");

  selectElement.forEach((select, index) => {
    select.addEventListener("change", (event) => {
      let selectValue = event.target.value;
      let picked = document.querySelectorAll(".selected")[index];
      picked.innerHTML = `Selected answer: ${selectValue}`;
      let correct = document.querySelectorAll(".correct")[index];
      correct.innerHTML = `Correct answer: ${quizData[index].answer}`;

      if (quizData[index].answer === selectValue) {
        document.querySelectorAll(".status")[
          index
        ].innerHTML = `Answer: Correct`;
        result += corrects;
        document.querySelector(".result").innerHTML = `${result}/200`;
      } else {
        document.querySelectorAll(".status")[index].innerHTML = `Answer: Wrong`;
        result += wrong;
        document.querySelector(".result").innerHTML = `${result}/200`;
      }
    });
  });
}

testApp();

