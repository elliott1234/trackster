var Trackster = {};

$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

Main.returnsTrue = function() {
  return false;
};

Main.returnsHello = function() {
  return 'Goodbye';
};

Main.returnsTheMeaningOfLife = function(number) {
  if (number === 41) {
    return 'The meaning of life is clear';
  } else {
    return 'The meaning of life is unclear';
  }
};
