const BLACK_KEYS = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']

const WHITE_KEYS = ['q', 'w', 's', 'x', 'd', 'c', 'f', 'v', 'g', 'b', 'h', 'n', 'j', ',']


const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

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

