
function buildQuiz()
{
  const output = [];

  myQuestions.forEach
  (
    (currentQuestion, questionNumber) => 
    {
      const answers = [];
      for(letter in currentQuestion.answers)
      {
        if(currentQuestion.answers[letter].charAt(0) == ".")
        {
          answers.push
          (
            `<label id="QuestionImage">
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} 
              <br><img src='${currentQuestion.answers[letter]}'" />
              </label>`
          );
        }
        else
        {
          answers.push
          (
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} 
              <br><br>${currentQuestion.answers[letter]}
            </label>`
          );
        }
      }      

      if(questionNumber == 9)
        {
          output.push
          (
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} <br><br><audio controlslist="nodownload" id="myaudio"  controls="" style=""> <source src="sound/fur-elise-violin.mp3"></audio></div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
        else
        {
          output.push
          (
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        } 
    }
  );

  quizContainer.innerHTML = output.join('');
}


function showResults()
{
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach( (currentQuestion, questionNumber) => 
  {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;


    if(userAnswer === currentQuestion.correctAnswer)
    {
      numCorrect++;
      answerContainers[questionNumber].style.color = '#278a2a';
    }
    else
    {
      answerContainers[questionNumber].style.color = 'red';
    }
  });


  resultsContainer.innerHTML = `Votre score est de : ${numCorrect} / ${myQuestions.length}`;
}


function showSlide(n) 
{
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  if(currentSlide === 0)
  {
    previousButton.style.display = 'none';
  }
  else
  {
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1)
  {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else
  {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() 
{
  showSlide(currentSlide + 1);
}

function showPreviousSlide() 
{
  let sound = document.getElementById('myaudio');

  showSlide(currentSlide - 1);
  sound.pause();
  sound.currentTime = 0;
}

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

let myQuestions = 
[
    {
      question: "1. Lequel de ces instruments est une guitare ?",
      answers: 
      {
        A: "../img/guitare_dessin.png",
        B: "../img/piano_dessin.png",
        C: "../img/violon_dessin.png",
        D: "../img/marimba.png"
      },
      correctAnswer: "A"
    },
    {
      question: "2. En général, combien une guitare posséde-t-elle de cordes ?",
      answers: 
      {
        A: "../img/guitare_cinq_cordes.png",
        B: "../img/guitare_quatre_cordes.png",
        C: "../img/guitare_six_cordes.png",
        D: "../img/guitare_sept_cordes.png"
      },
      correctAnswer: "C"
    },
    {
      question: "3. Parmi les instruments de musique suivants, lequel n'est pas un instrument à cordes ?",
        answers: 
        {
          A: "../img/luth.png",
          B: "../img/piano_dessin.png",
          C: "../img/marimba.png",
          D: "../img/contrebasse.png"
        },
        correctAnswer: "C"
    },
    {
      question: "4. Qu'est-ce qu'une kora ?",
        answers: 
        {
          A: "Un instrument traditionnel africain",
          B: "Une note utilisée pour la harpe",
          C: "Une oeuvre musicale pour cors de chasse",
          D: "Un mot inventé qui ne veut rien dire"
        },
        correctAnswer: "A"
    },
    {
      question: "5. À quelle famille d'instruments le saxophone appartient-il ?",
        answers: 
        {
          A: "Les cuivres",
          B: "Les instruments à biseau",
          C: "À aucune de ces familles",
          D: "Les bois"
        },
        correctAnswer: "D"
    },
    {
      question: "6. Comment s'appelle l'instrument aborigène d'Australie qui ressemble à un long tube en bois dans lequel l'instrumentiste souffle en imitant le bruit du bourdon ?",
        answers: 
        {
          A: "Le wikiboo",
          B: "Le scoubidoo",
          C: "Le didgeridoo",
          D: "Le kiwibidoo"
        },
        correctAnswer: "C"
    },
    {
      question: "7. Parmi les cuivres suivants, lequel ne comporte pas de pistons ?",
        answers: 
        {
          A: "Le tuba",
          B: "Le cor",
          C: "Le trombone",
          D: "Le trompette"
        },
        correctAnswer: "B"
    },
    {
      question: "8. Quelle nymphe grecque a donné son nom à une flûte, aussi connue sous le nom de « flûte de Pan » ?",
        answers: 
        {
          A: "Maïa",
          B: "Daphné",
          C: "Syrinx",
          D: "Néphélé"
        },
        correctAnswer: "C"
    },
    {
      question: "9. Qu'est-ce qu'un bedon ?",
        answers: 
        {
          A: "Un instrument à cordes frottées originaire de Bretagne",
          B: "Une sorte de tuba au tube long et au son très grave",
          C: "Un joueur de bède, un instrument typiquement gaulois",
          D: "Un instrument à percussion datant du Moyen Âge"
        },
        correctAnswer: "D"
    },
    {
      question: "10. Quel instrument est joué dans cet extrait ?",
        answers: 
        {
          A: "../img/guitare_dessin.png",
          B: "../img/piano_dessin.png",
          C: "../img/violon_dessin.png",
          D: "../img/luth.png"
        },
        correctAnswer: "C"
    }
  ];
  


buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);


let audio = document.getElementById("myaudio");
audio.volume = 0.02;