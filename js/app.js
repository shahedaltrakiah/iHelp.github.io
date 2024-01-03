let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
$('#contact-car').hide();
$('#contact-bus').hide();
$('#contact-bike').hide();
$('#contact-phone').hide();
$('#contact-mail').hide();

$('#contact-carClick').removeClass("active");
$('#contact-busClick').removeClass("active");
$('#contact-bikeClick').removeClass("active");
$('#contact-phoneClick').removeClass("active");
$('#contact-mailClick').removeClass("active");

$('#contact-map').show();
$("#contact-mapClick").addClass("active");

// contact page toogles
$("#contact-mapClick").click(function () {
$('#contact-car').hide();
$('#contact-bus').hide();
$('#contact-bike').hide();
$('#contact-phone').hide();
$('#contact-mail').hide();

$('#contact-carClick').removeClass("active");
$('#contact-busClick').removeClass("active");
$('#contact-bikeClick').removeClass("active");
$('#contact-phoneClick').removeClass("active");
$('#contact-mailClick').removeClass("active");

$('#contact-map').show();
$("#contact-mapClick").addClass("active");
});
$("#contact-carClick").click(function () {
$('#contact-map').hide();
$('#contact-bus').hide();
$('#contact-bike').hide();
$('#contact-phone').hide();
$('#contact-mail').hide();

$('#contact-mapClick').removeClass("active");
$('#contact-busClick').removeClass("active");
$('#contact-bikeClick').removeClass("active");
$('#contact-phoneClick').removeClass("active");
$('#contact-mailClick').removeClass("active");

$('#contact-car').show();
$("#contact-carClick").addClass("active");
});
$("#contact-busClick").click(function () {
$('#contact-map').hide();
$('#contact-car').hide();
$('#contact-bike').hide();
$('#contact-phone').hide();
$('#contact-mail').hide();

$('#contact-mapClick').removeClass("active");
$('#contact-carClick').removeClass("active");
$('#contact-bikeClick').removeClass("active");
$('#contact-phoneClick').removeClass("active");
$('#contact-mailClick').removeClass("active");

$('#contact-bus').show();
$("#contact-busClick").addClass("active");
});
$("#contact-bikeClick").click(function () {
$('#contact-map').hide();
$('#contact-car').hide();
$('#contact-bus').hide();
$('#contact-phone').hide();
$('#contact-mail').hide();

$('#contact-mapClick').removeClass("active");
$('#contact-carClick').removeClass("active");
$('#contact-busClick').removeClass("active");
$('#contact-phoneClick').removeClass("active");
$('#contact-mailClick').removeClass("active");

$('#contact-bike').show();
$("#contact-bikeClick").addClass("active");
});
$("#contact-phoneClick").click(function () {
$('#contact-map').hide();
$('#contact-car').hide();
$('#contact-bus').hide();
$('#contact-bike').hide();
$('#contact-mail').hide();

$('#contact-mapClick').removeClass("active");
$('#contact-carClick').removeClass("active");
$('#contact-busClick').removeClass("active");
$('#contact-bikeClick').removeClass("active");
$('#contact-mailClick').removeClass("active");

$('#contact-phone').show();
$("#contact-phoneClick").addClass("active");
});



$("#contact-mailClick").click(function () {
$('#contact-map').hide();
$('#contact-car').hide();
$('#contact-bus').hide();
$('#contact-bike').hide();
$('#contact-phone').hide();

$('#contact-mapClick').removeClass("active");
$('#contact-carClick').removeClass("active");
$('#contact-busClick').removeClass("active");
$('#contact-bikeClick').removeClass("active");
$('#contact-phoneClick').removeClass("active");

$('#contact-mail').show();
$("#contact-mailClick").addClass("active");
});

