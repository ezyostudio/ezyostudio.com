document.addEventListener("DOMContentLoaded", function () {  
  const animator = new TypingAnimator({
    target: 'header .container h1 span',
    loop: true,
    loopDelay: 2500,
    stepDelay: 250,
  }, [
    { wait: 2500 },
    "addCursor",
    { wait: 750 },
    { text: 'Studio' },
    { text: 'Studi' },
    { text: 'Stud' },
    { text: 'Stud.' },
    { text: 'Stud.i' },
    { text: 'Stud.io' },
    "removeCursor",
    { wait: 2500 },
    "addCursor",
    { wait: 750 },
    { text: 'Stud.i' },
    { text: 'Stud.' },
    { text: 'Stud' },
    { text: 'Stud' },
    { text: 'Studi' },
    { text: 'Studio' },
    "removeCursor",
  ]);

  animator.animate();
});

window.addEventListener("DOMContentLoaded", function(e) {

  var stage = document.querySelector("header .carousel-content");
  var fadeComplete = function(e) { 
    stage.appendChild(arr[0]); 
  };
  var arr = stage.getElementsByTagName("div");
  for(let i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationstart", function(){
      let el = stage.getElementsByTagName("div")[1];
      document.querySelector("header .container h1 span").style.color = el.attributes.getNamedItem('data-text-color').value;
    }, false);

    arr[i].addEventListener("animationend", function(){
      { 
        stage.appendChild(arr[0]); 
      }
    }, false);
  }

}, false);