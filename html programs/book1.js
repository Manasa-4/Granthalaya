$(function () {
    $(".place").click(function () {
      $(this).toggleClass("active");
    });
    $(".unbooked").attr("title","Unbooked");
    $(".taken").attr("title","Taken");
  });
  
  $("#submit").click(function () {
    $(".place").each(function () {
      if ($(this).hasClass("active")) {
        $(this).addClass("taken");
        $(this).removeClass("unbooked");
        $(this).attr("title","Taken");
        alert("Seats booked: " + $(this).text())
      }
    });
  });
  
  const container = document.querySelector('.container')
  const seats = document.querySelectorAll('.row .seat:not(.occupied)')
  const count = document.getElementById('count')
  
  container.addEventListener('click', function (e) {
    console.log(e.target)
    if (
      e.target.classList.contains('seat') &&
      !e.target.classList.contains('occupied')
  ) {
    console.log(e.target)
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
})