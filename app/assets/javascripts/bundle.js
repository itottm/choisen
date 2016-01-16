/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	window.onload = function () {
	
	  var choiceCount = $(".choicesItem").length + 1;
	  $(document).on('input', '.choicesItemInput', function () {
	    if (!$(this).closest('.choicesItem').next('.choicesItem').length) {
	      $(this).closest('.choicesItem').after('<li class="choicesItem"><label for="choicesItem' + choiceCount + '">選択肢' + choiceCount + '</label><input type="text" id="choicesItem' + choiceCount + '" class="choicesItemInput"></li>');
	      choiceCount++;
	    }
	    var joinText = "";
	    $(".choicesItemInput").each(function () {
	      if ($(this).val()) {
	        joinText += $(this).val() + ' |||| ';
	        $("#testIto").text(joinText);
	        $("#choices_text").val(joinText);
	      }
	    });
	  });
	
	  //$("#pollLimit").on("change", function(){
	  //  let val =  $(this).val();
	  //  if(val == "15分"){
	  //    $("#poll_limit").val("15.minutes.since");
	  //  }else if(val == "30分"){
	  //    $("#poll_limit").val("30.minutes.since");
	  //  }
	  //  }
	  //);
	
	  //
	  //document.querySelectorAll('input').style.backgroundColor('#f00');
	  //document.querySelector("main").style.color = "#0f0";
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzA4ZjZlOGM1MWFlODIwMDEyMWIiLCJ3ZWJwYWNrOi8vLy4vZXM2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE1BQU0sR0FBRyxZQUFZOztBQUUxQixPQUFJLFdBQVcsR0FBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM5QyxJQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxZQUFVO0FBQ3BELFNBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUM7QUFDOUQsUUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLHFEQUFtRCxXQUFXLGFBQVEsV0FBVyxrREFBNkMsV0FBVyxzQ0FBbUMsQ0FBQztBQUNsTixrQkFBVyxFQUFFLENBQUM7TUFDZjtBQUNELFNBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixNQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUN0QyxXQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUNqQixpQkFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUM7QUFDckMsVUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QixVQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDO01BQ0YsQ0FBQztJQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUFDLEVBaUJKLEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDMwOGY2ZThjNTFhZTgyMDAxMjFiXG4gKiovIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblxuICBsZXQgY2hvaWNlQ291bnQ9ICQoXCIuY2hvaWNlc0l0ZW1cIikubGVuZ3RoICsgMTtcbiAgJChkb2N1bWVudCkub24oJ2lucHV0JywnLmNob2ljZXNJdGVtSW5wdXQnLCBmdW5jdGlvbigpe1xuICAgIGlmKCEkKHRoaXMpLmNsb3Nlc3QoJy5jaG9pY2VzSXRlbScpLm5leHQoJy5jaG9pY2VzSXRlbScpLmxlbmd0aCl7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaG9pY2VzSXRlbScpLmFmdGVyKGA8bGkgY2xhc3M9XCJjaG9pY2VzSXRlbVwiPjxsYWJlbCBmb3I9XCJjaG9pY2VzSXRlbSR7Y2hvaWNlQ291bnR9XCI+6YG45oqe6IKiJHtjaG9pY2VDb3VudH08L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2hvaWNlc0l0ZW0ke2Nob2ljZUNvdW50fVwiIGNsYXNzPVwiY2hvaWNlc0l0ZW1JbnB1dFwiPjwvbGk+YCk7XG4gICAgICBjaG9pY2VDb3VudCsrO1xuICAgIH1cbiAgICBsZXQgam9pblRleHQgPSBcIlwiO1xuICAgICQoXCIuY2hvaWNlc0l0ZW1JbnB1dFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgIGpvaW5UZXh0ICs9ICQodGhpcykudmFsKCkgKyAnIHx8fHwgJztcbiAgICAgICAgJChcIiN0ZXN0SXRvXCIpLnRleHQoam9pblRleHQpO1xuICAgICAgICAkKFwiI2Nob2ljZXNfdGV4dFwiKS52YWwoam9pblRleHQpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gIC8vJChcIiNwb2xsTGltaXRcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcbiAgLy8gIGxldCB2YWwgPSAgJCh0aGlzKS52YWwoKTtcbiAgLy8gIGlmKHZhbCA9PSBcIjE15YiGXCIpe1xuICAvLyAgICAkKFwiI3BvbGxfbGltaXRcIikudmFsKFwiMTUubWludXRlcy5zaW5jZVwiKTtcbiAgLy8gIH1lbHNlIGlmKHZhbCA9PSBcIjMw5YiGXCIpe1xuICAvLyAgICAkKFwiI3BvbGxfbGltaXRcIikudmFsKFwiMzAubWludXRlcy5zaW5jZVwiKTtcbiAgLy8gIH1cbiAgLy8gIH1cbiAgLy8pO1xuXG5cblxuICAvL1xuICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yKCcjZjAwJyk7XG4gIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUuY29sb3IgPSBcIiMwZjBcIjtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2VzNi9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=