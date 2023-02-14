// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Add click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val();
    console.log(value)
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });
  
  // Apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  var currentHour = dayjs().format("HH");
  $(".time-block").each(function () {
    var timeblock = parseInt($(this).attr("id").split("-")[1]);
    
    if (currentHour == timeblock) {
      $(this).addClass("present");
    } else if (currentHour < timeblock) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeblock) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
  
  // To get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements

  $("#hour-9 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));

  // display the current date in the header of the page.
  var now = dayjs().format('DD/MM/YYYY');
  var displayDate = document.getElementById("currentDay");
      displayDate.innerHTML = now;
 
  
  // Button function to clear local storage and clear contents
  // $("#clearFieldsBtn").click(function (event) {
  //   event.preventDefault;
  //   $("textarea").val("");
  //   localStorage.clear();
  // });

  
  
});