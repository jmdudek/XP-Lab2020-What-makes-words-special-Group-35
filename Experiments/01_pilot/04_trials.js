// In this file you can specify the trial data for your experiment

const images = [
  "bird_robin_1.jpg", "bird_robin_2.jpg", "bird_seagull_1.jpg", "bird_seagull_2.jpg", "car_ford_1.jpg", "car_ford_2.jpg", "car_v8_1.jpg", "car_v8_2.jpg", "dog_chihuahua_1.jpg", "dog_chihuahua_2.jpg",
  "dog_rottweiler_1.jpg", "dog_rottweiler_2.jpg", "instrument_cello_1.jpg", "instrument_cello_2.jpg", "instrument_violin_1.jpg", "instrument_violin_2.jpg", "phone_rotary_1.jpg", "phone_rotary_2.jpg",
  "phone_smartphone_1.jpg", "phone_smartphone_2.jpg", "typing_keyboard_1.jpg", "typing_keyboard_2.jpg", "typing_typewriter_1.jpg", "typing_typewriter_2.jpg"
];

const sounds = [
  "bird_label_female.mp3", "bird_label_male.mp3", "bird_sound_robin.mp3", "bird_sound_seagull.mp3", "car_label_female.mp3", "car_label_male.mp3", "car_sound_ford.mp3", "car_sound_v8.mp3",
  "dog_label_female.mp3", "dog_label_male.mp3", "dog_sound_chihuahua.mp3", "dog_sound_rottweiler.mp3", "instrument_label_female.mp3", "instrument_label_male.mp3", "instrument_sound_cello.mp3",
  "instrument_sound_violin.mp3", "phone_label_female.mp3", "phone_label_male.mp3", "phone_sound_rotary.mp3", "phone_sound_smartphone.mp3", "typing_label_female.mp3", "typing_label_male.mp3",
  "typing_sound_keyboard.mp3", "typing_sound_typewriter.mp3"
];

// an array that consists of the matching indices for images and mp3
// form: [image index, [matching audio indices]]
const match = [
  [0, [0, 1, 2, 3]], [1, [0, 1, 2, 3]], [2, [0, 1, 2, 3]], [3, [0, 1, 2, 3]],
  [4, [4, 5, 6, 7]], [5, [4, 5, 6, 7]], [6, [4, 5, 6, 7]], [7, [4, 5, 6, 7]],
  [8, [8, 9, 10, 11]], [9, [8, 9, 10, 11]], [10, [8, 9, 10, 11]], [11, [8, 9, 10, 11]],
  [12, [12, 13, 14, 15]], [13, [12, 13, 14, 15]], [14, [12, 13, 14, 15]], [15, [12, 13, 14, 15]],
  [16, [16, 17, 18, 19]], [17, [16, 17, 18, 19]], [18, [16, 17, 18, 19]], [19, [16, 17, 18, 19]],
  [20, [20, 21, 22, 23]], [21, [20, 21, 22, 23]], [22, [20, 21, 22, 23]], [23, [20, 21, 22, 23]]
];


//const shuffled_images = shuffle(images);

const create_trials = function(index_beginning, index_end) {
  const trials = [];
  for (ii = 0; ii < 3; ii++) {
    for(i=index_beginning; i<index_end; i++) {
      index_match = get_matching_image_index(match[i][1]);
      index_mismatch = get_mismatching_image_index(match[i][1]);
      var trial = {
        audio: 'stimuli/sounds/' + sounds[i],
        picture: 'stimuli/images/' + images[index_match],
        key1: 'q',
        key2: 'p',
        q: 'yes',
        p: 'no',
        expected: get_expected(get_category_of_image(images[index_match]), get_auditory_cue_category(sounds[i])),
        image_category: get_category_of_image(images[index_match]),
        image_instance: get_instance_of_image(images[index_match]),
        number_of_image: get_number_of_image(images[index_match]),
        sound_category:get_auditory_cue_category(sounds[i]),
        sound_instance: get_auditory_cue_instance(sounds[i]),
        sound_type: get_auditory_cue_type(sounds[i]),
        congruency: get_congruency(get_category_of_image(images[index_match]), get_instance_of_image(images[index_match]), get_auditory_cue_category(sounds[i]), get_auditory_cue_instance(sounds[i]), get_auditory_cue_type(sounds[i])),
        match: "match",
      };
      trials.push(trial);
      var trial = {
        audio: 'stimuli/sounds/' + sounds[i],
        picture: 'stimuli/images/' + images[index_mismatch],
        key1: 'q',
        key2: 'p',
        q: 'yes',
        p: 'no',
        expected: get_expected(get_category_of_image(images[index_mismatch]), get_auditory_cue_category(sounds[i])),
        image_category: get_category_of_image(images[index_mismatch]),
        image_instance: get_instance_of_image(images[index_mismatch]),
        number_of_image: get_number_of_image(images[index_mismatch]),
        sound_category:get_auditory_cue_category(sounds[i]),
        sound_instance: get_auditory_cue_instance(sounds[i]),
        sound_type: get_auditory_cue_type(sounds[i]),
        congruency: get_congruency(get_category_of_image(images[index_mismatch]), get_instance_of_image(images[index_mismatch]), get_auditory_cue_category(sounds[i]), get_auditory_cue_instance(sounds[i]), get_auditory_cue_type(sounds[i])),
        match: "mismatch",
      };
      trials.push(trial);
    };
  };
  return trials;
};

const create_test_trials = function(arr_of_indices_match, arr_of_indices_mismatch) {
  const trials = [];
  arr_of_indices_match.forEach(i => {
    index_match = get_matching_image_index(match[i][1]);
    var trial = {
      audio: 'stimuli/sounds/' + sounds[i],
      picture: 'stimuli/images/' + images[index_match],
      key1: 'q',
      key2: 'p',
      q: 'yes',
      p: 'no',
      expected: get_expected(get_category_of_image(images[index_match]), get_auditory_cue_category(sounds[i])),
      image_category: get_category_of_image(images[index_match]),
      image_instance: get_instance_of_image(images[index_match]),
      number_of_image: get_number_of_image(images[index_match]),
      sound_category:get_auditory_cue_category(sounds[i]),
      sound_instance: get_auditory_cue_instance(sounds[i]),
      sound_type: get_auditory_cue_type(sounds[i]),
      congruency: get_congruency(get_category_of_image(images[index_match]), get_instance_of_image(images[index_match]), get_auditory_cue_category(sounds[i]), get_auditory_cue_instance(sounds[i]), get_auditory_cue_type(sounds[i])),
      match: "match",
    };
    trials.push(trial);
  });
  arr_of_indices_mismatch.forEach(i => {
    index_mismatch = get_mismatching_image_index(match[i][1]);
    var trial = {
      audio: 'stimuli/sounds/' + sounds[i],
      picture: 'stimuli/images/' + images[index_mismatch],
      key1: 'q',
      key2: 'p',
      q: 'yes',
      p: 'no',
      expected: get_expected(get_category_of_image(images[index_mismatch]), get_auditory_cue_category(sounds[i])),
      image_category: get_category_of_image(images[index_mismatch]),
      image_instance: get_instance_of_image(images[index_mismatch]),
      number_of_image: get_number_of_image(images[index_mismatch]),
      sound_category:get_auditory_cue_category(sounds[i]),
      sound_instance: get_auditory_cue_instance(sounds[i]),
      sound_type: get_auditory_cue_type(sounds[i]),
      congruency: get_congruency(get_category_of_image(images[index_mismatch]), get_instance_of_image(images[index_mismatch]), get_auditory_cue_category(sounds[i]), get_auditory_cue_instance(sounds[i]), get_auditory_cue_type(sounds[i])),
      match: "mismatch",
    };
    trials.push(trial);
  });
  return trials;
};

const random_indices_match = generateRandomArray(3);
const random_indices_mismatch = generateRandomArray(3);

const trial_info = {
  training_images: create_test_trials(random_indices_match, random_indices_mismatch),
  main_images: create_trials(0,1),
};
