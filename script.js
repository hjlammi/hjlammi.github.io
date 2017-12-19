$(document).ready(function() {
  let today = new Date();
  const bd = new Date(1981, 1, 19);
  let ageInMS = today - bd;
  const yearsInMS = 1000 * 60 * 60 * 24 * 365;
  const age = Math.floor(ageInMS / yearsInMS);

  $('.age').text(age);
  console.log(age);
});
