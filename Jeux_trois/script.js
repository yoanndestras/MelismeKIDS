var pattern = [];
var usedPattern = [];
var level = 0;
var gameCheck = false;

function addPattern() {
  var pValue = randNum(1, 4);

  // add pattern to array
  pattern.push(pValue);
}


function playPattern() {
  // takes pattern array
  for (var i = 0; i < pattern.length; i++) {
    var delayTime = i * 600;

    setTimeout(flashnotes, delayTime);


  }

}

function flashnotes() {

  var item = pattern.pop();
  gameCheck = true;

     // pops and removes first item of array 
  $('#' + item).animate({
    opacity: 0.2
  }, 400).animate({
    opacity: 1
  }, 200);
  //animation takes 300 ms

  usedPattern.push(item);
  // take the item  removed from pattern and add it to used pattern 

  if (pattern.length <= 0) {
    // add the click event once cpu is finished showing the pattern
    createClicks();
  }

} // end flashnotes()

function createClicks() {
  $('.notes').click(function() {
    // check if clicked element is the right notes
    var item = usedPattern.shift();

    var notesId = $(this).attr('id');

    $(this).animate({opacity:.2},200).animate({opacity:1},100)

    // if yes remove from used pattern and add to pattern
    if (item == notesId) {
      //adds item back to pattern array
      pattern.push(item);

      if (usedPattern.length <= 0) {
        level++;
        $('#level').html('Level: ' + level);

        removeClicks();
        //user is finished clicking through the pattern successfully
        // add new notes to pattern
        addPattern();

        // playPattern();
        setTimeout(playPattern, 800);
      }

    } else {
      // else game over
      gameCheck = false;
      $('#p').html('');
      $('h3').html('<i class="fas fa-paw"></i><br><br><p>Oups ! <br> Recommencer</p>');
      // clear out pattern arrays
      pattern = [];
      usedPattern = [];
    }


  }); // end .notes click
} // end create click

function removeClicks() {
  //removes all events from element 
  $('.notes').unbind();

}

  
function startGame() {
  removeClicks();
  resetGame();
  addPattern();
  addPattern();
  playPattern(); 
}

function resetGame() {
  level = 0;

  $('#level').html('Level: ' + level);
  $('#p').html('<i class="fas fa-paw"></i>');
}


$('#middleCircle').click(function() {
  if(gameCheck === false){
    startGame();
  } 
});

function randNum(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}



const BLACK_KEYS = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']

const WHITE_KEYS = ['q', 'w', 's', 'x', 'd', 'c', 'f', 'v', 'g', 'b', 'h', 'n', 'j', ',']


const keys = document.querySelectorAll('.notes')
const whiteKeys = document.querySelectorAll('.notes.white')
const blackKeys = document.querySelectorAll('.notes.black')

keys.forEach(key => 
{
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => 
{
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) 
{
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')

  /*noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })*/

  setTimeout(function() {
    key.classList.remove('active');
  }, 1000);
}



let save= new Array();   // move array out of function as 
                          //you want to store in array on every click
function myFunction(name,n)
{

  save[n]=name;

  if(n%2==0)
  {
    save[n]='x';   
  }
  else
  {
    save[n]='o' // fix spellling
      check1();
  }
      function check1()
      {   
        if(save[0] && save[1] && save[2] == 'x')
          alert("congrats");
      }       
}

