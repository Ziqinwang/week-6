/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "1",
      "language": "Javascript",
      "namespace": "L"
    },
    {
      "name": "2",
      "language": "Javascript",
      "namespace": "_"
    },
    {
      "name": "3",
      "language": "Javascript",
      "namespace": "$"
    }
  ]
};
var slidenumber = 0;


var clickNextButton = function() {
  slidenumber += 1;
  if (slidenumber >= state.slideData.length){
    slidenumber = 0;
    saySlideName(slidenumber);
  }
  else {
    saySlideName(slidenumber);
  }

};

var clickPreviousButton = function() {
  slidenumber -= 1;
  if (slidenumber < 0){
    slidenumber = state.slideData.length - 1;
    saySlideName(slidenumber);
  }
  else {
    saySlideName(slidenumber);
  }
};

var saySlideName = function(slide) {
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
  var a = state.slideData[slide].name;
  console.log(a);

};
