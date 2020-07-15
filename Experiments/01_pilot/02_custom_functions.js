// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
var iter = 0;
// Declare your variables here


/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here
/*
get_type_of_image = function(str){
  return str.split("_")[2].split(".")[0];
};
*/
get_category_of_image = function(str){
  return str.split("_")[0];
};

get_instance_of_image = function(str){
  return str.split("_")[1];
};

get_number_of_image = function(str){
  return str.split("_")[2].split(".")[0];
};

get_auditory_cue_type = function(str){
  return str.split("_")[1];
};

get_auditory_cue_category = function(str){
  return str.split("_")[0];
};

get_auditory_cue_instance = function(str){
  return str.split("_")[2].split(".")[0];
};

get_matching_image_index = function(arr){
  return arr[Math.floor(Math.random() * arr.length)];
};

get_mismatching_image_index = function(arr){
  return generateRandom(0, 23, arr);
};

get_congruency = function(image_cat, image_inst, audio_cat, audio_inst, audio_type){

  if (audio_type == "sound") {
    if (image_cat == audio_cat) {
      if (image_inst == audio_inst) {
        return "congruent";
      } else {
        return "incongruent";
      }
    } else {
      return "-";
    }
  } else {
    return "-";
  }
};

get_expected = function(image_cat, audio_cat){
  if (audio_cat == image_cat) {
    return "yes";
  } else {
    return "no";
  }
};

//shuffles an array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
};

//returns random number excluding specified ones
function generateRandom(min, max, failOn) {
    failOn = Array.isArray(failOn) ? failOn : [failOn]
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return failOn.includes(num) ? generateRandom(min, max, failOn) : num;
};

function generateRandomArray(num) {
    const rand_ind = [];
    for (var i = 0; i < num; i++) {
      var rand = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
      rand_ind.push(rand)
    }
    return rand_ind;
};

/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    },2000));
    next();
};

// compares the chosen answer to the value of `option1`
var audio = new Audio("stimuli/sounds/bird_sound_robin.mp3");
var keyHandlerActive = true;

check_response = function(data, next){
  const arr = data;
  keyHandlerActive = true;
  $(document).on('keypress', function(e) {
    if (keyHandlerActive) {
      if (iter <= 3) {
        if (e.keyCode == 113) {
          alert("Correct!");
        }
        if (e.keyCode == 112) {
          alert("Incorrect!");
        }
      }
      if (iter > 3 && iter <= 6) {
        //console.log("yes");
        if (e.keyCode == 113) {
          alert("Incorrect!");
        }
        if (e.keyCode == 112) {
          alert("Correct!");
        }
      }
      //console.log(iter);
      /*
      if (e.keyCode == 113) {
        //console.log(e.keyCode);
        //console.log(data[iter].expected);
        //console.log(arr[iter]);
        //alert("lol");
        console.log(iter);
      }
      if (e.keyCode == 112) {
        //console.log(e.keyCode);
        //alert("lul");
        //console.log(data[iter].expected);
        //console.log(iter);
        //console.log(data[iter]);
        //console.log(arr[iter]);
      }*/
    }
    keyHandlerActive = false;
});
iter = iter + 1;
};

// Declare your hooks here

//adds additional delay
const add_delay = function(data, next){
  setTimeout(function(){next();}, 2250);
};

/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
