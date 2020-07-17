// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: "Hello there!",
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for taking part in our experiment!
            <br />
            <br />
            You will need around <b>10 min</b> to complete the experiment. Please <b>make sure that you will not be distracted</b>.
            Switch off your phone, background music or any other kind of distraction around you and try to concentrate as much as you can on the task at hand.
            <br />
            <br />
            By clicking on the button below you will get to the next page where you will receive <b>further information</b> on how to proceed. `
            ,
  buttonText: 'show instructions'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In this experiment, you will be hearing auditory cues after which an image will appear.
            On each trial, you will first see a fixation cross in the middle of the screen, which will indicate that the next trial is about to start.
            Please <b>focus on this cross</b> at the beginning of each trial.
            <br />
            <br />
            After the cross disappears an auditory cue (either a spoken word or an environmental sound) will be played automatically, so <b>make sure that your speakers or headphones are turned on</b>.
            Shortly after the auditory cue an image will appear in the center of the screen.
            Your task will be to determine for each round whether or not the sound you heard belongs to the same basic level category as the image that is being displayed.
            <br />
            Same basic level category means e.g. you hear <b>any</b> dog barking or a person saying the word "dog". After that, an image of <b>any</b> dog appears, so the sounds match with the <b>basic level category</b> of the image.
            <br />
            <br />
            You should <b>indicate your decision</b> by either <b>pressing the "q" or "p" button</b> on your keyboard.
            <br />
            <br />
            <b>"q"</b> indicates a <b>yes</b> response. Example:
            <br />
            Sound: "<b>any</b> phone's ringtone" or Spoken Word: "phone" followed by <b>any</b> picture of a phone =>  same basic level category
            <br />
            <br />
            <b>"p"</b> indicates a <b>no</b> response. Example:
            <br />
            Sound: "<b>any</b> phone's ringtone" or Spoken Word: "phone" followed by <b>any</b> picture of a dog => different basic level category
            <br />
            <br />
            First, you will go through 6 practice trials to familiarise yourself with the task.
            <br />
            After that, a second instructions screen will show up to notify you that the main trials are about to begin.
            <br />
            <br />
            Please be as <b>fast</b> and <b>accurate</b> as you can.`,
  buttonText: 'go to trials'
});

const instructions_main = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_main',
    title: 'Main Trials are about to start!',
    text:  `Now that you are familiar with the task, the main trials can begin.
            <br />
            <br />
            Once again the key assignment:
            <br />
            <br />
            <b>"q"</b> indicates a <b>yes</b> response
            <br />
            <br />
            <b>"p"</b> indicates a <b>no</b> response
            <br />
            <br />
            Please <b>concentrate</b> on the task and be as <b>fast</b> and <b>accurate</b> in your decisions as possible.`,
    buttonText: 'begin'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const main = magpieViews.view_generator(
  "key_press",
  {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.main_images.length,
  // name should be identical to the variable name
  name: 'main',
  data: _.shuffle(trial_info.main_images),
  //data: trial_info.main_images,
  fix_duration: 250,
  // you can add custom functions at different stages through a view's life cycle
  hook: {
    after_fix_point: add_delay
   }
  },
  //custom generator function
  {
    stimulus_container_generator: function(config, CT){
        return `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-response-keypress-header'>
                    <strong>${config.data[CT].key1}</strong> = ${config.data[CT][config.data[CT].key1]},
                    <strong>${config.data[CT].key2}</strong> = ${config.data[CT][config.data[CT].key2]}</p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                        <audio onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 250)">
                          <source src="${config.data[CT].audio}" type="audio/mpeg">
                        </audio>
                    </div>
                </div>`;
    }
  }
);

const training = magpieViews.view_generator(
  "key_press",
  {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.training_images.length,
  // name should be identical to the variable name
  name: 'training',
  //data: _.shuffle(trial_info.training_images),
  data: trial_info.training_images,
  fix_duration: 250,
  hook: {
    after_fix_point: add_delay,
    after_response_enabled: check_response
    }
  },
  {
    stimulus_container_generator: function(config, CT){
        return `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-response-keypress-header'>
                    <strong>${config.data[CT].key1}</strong> = ${config.data[CT][config.data[CT].key1]},
                    <strong>${config.data[CT].key2}</strong> = ${config.data[CT][config.data[CT].key2]}</p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                        <audio onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 250)">
                          <source src="${config.data[CT].audio}" type="audio/mpeg">
                        </audio>
                    </div>
                </div>`;
    }
  }
);

/*
const test = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.key_press_trials.length,
  // name should be identical to the variable name
  name: 'test',
  data: _.shuffle(trial_info.key_press_trials),
  pause: 250,
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});
*/
// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
