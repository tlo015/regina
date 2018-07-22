// TYPERWRITER FUNCTION
//https://safi.me.uk/typewriterjs/
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
.typeString('not your average developer')
.pauseFor(2500)
.deleteAll()
.pauseFor(1000)
.typeString('a full-stack developer')
.pauseFor(2500)
.deleteChars(20)
.pauseFor(1000)
.typeString('creative designer')
.pauseFor(2500)
.deleteChars(17)
.pauseFor(1000)
.typeString('problem solver')
.pauseFor(2500)
.start();
