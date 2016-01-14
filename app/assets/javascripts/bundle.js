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
	
	  console.log("あああおおおお");
	
	  //document.getElementById('poll_answer01').addEventListener("input", function () {
	  //  let list = document.createElement('li');
	  //  list.className = 'list';
	  //  list.innerHTML = 'あ〜〜';
	  //
	  //
	  //  var myMain = document.getElementsByTagName("main");
	  //  myMain.parentNode.insertBefore(document.getElementsByTagName("nav"),myMain.nextElementSibling);
	  //
	  //}, false);
	
	  var choiceCount = 3;
	  $(document).on('input', '.choicesItem', function () {
	    if (!$(this).closest('tr').next().length) {
	      $(this).closest('tr').after('<tr><th><label for="choicesItem' + choiceCount + '">選択肢' + choiceCount + '</label> </th><td><input type="text" id="choicesItem' + choiceCount + '" class="choicesItem"></td></tr>');
	      choiceCount++;
	    }
	    var joinText = "";
	    $(".choicesItem").each(function () {
	      if ($(this).val()) {
	        joinText += $(this).val() + ' |||| ';
	        $("#testIto").text(joinText);
	        $("#choices_text").val(joinText);
	      }
	    });
	  });
	
	  //
	  //document.querySelectorAll('input').style.backgroundColor('#f00');
	  //document.querySelector("main").style.color = "#0f0";
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWNjZTNiY2NlMWViYWJlNTIzM2QiLCJ3ZWJwYWNrOi8vLy4vZXM2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE1BQU0sR0FBRyxZQUFZOztBQUUxQixVQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWF0QixPQUFJLFdBQVcsR0FBRSxDQUFDLENBQUM7QUFDbkIsSUFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsY0FBYyxFQUFFLFlBQVU7QUFDL0MsU0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFDO0FBQ3RDLFFBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxxQ0FBbUMsV0FBVyxhQUFRLFdBQVcsNERBQXVELFdBQVcsc0NBQW1DLENBQUM7QUFDbE0sa0JBQVcsRUFBRSxDQUFDO01BQ2Y7QUFDRCxTQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsTUFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZO0FBQ2pDLFdBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQ2pCLGlCQUFRLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQztBQUNyQyxVQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLFVBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEM7TUFDRixDQUFDO0lBQ0gsQ0FBQzs7Ozs7QUFBQyxFQVNKLEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDljY2UzYmNjZTFlYmFiZTUyMzNkXG4gKiovIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblxuICBjb25zb2xlLmxvZyhcIuOBguOBguOBguOBiuOBiuOBiuOBilwiKTtcblxuICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2xsX2Fuc3dlcjAxJykuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgLy8gIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3QnO1xuICAvLyAgbGlzdC5pbm5lckhUTUwgPSAn44GC44Cc44CcJztcbiAgLy9cbiAgLy9cbiAgLy8gIHZhciBteU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm1haW5cIik7XG4gIC8vICBteU1haW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJuYXZcIiksbXlNYWluLm5leHRFbGVtZW50U2libGluZyk7XG4gIC8vXG4gIC8vfSwgZmFsc2UpO1xuXG4gIHZhciBjaG9pY2VDb3VudD0gMztcbiAgJChkb2N1bWVudCkub24oJ2lucHV0JywnLmNob2ljZXNJdGVtJywgZnVuY3Rpb24oKXtcbiAgICBpZighJCh0aGlzKS5jbG9zZXN0KCd0cicpLm5leHQoKS5sZW5ndGgpe1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFmdGVyKGA8dHI+PHRoPjxsYWJlbCBmb3I9XCJjaG9pY2VzSXRlbSR7Y2hvaWNlQ291bnR9XCI+6YG45oqe6IKiJHtjaG9pY2VDb3VudH08L2xhYmVsPiA8L3RoPjx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNob2ljZXNJdGVtJHtjaG9pY2VDb3VudH1cIiBjbGFzcz1cImNob2ljZXNJdGVtXCI+PC90ZD48L3RyPmApO1xuICAgICAgY2hvaWNlQ291bnQrKztcbiAgICB9XG4gICAgbGV0IGpvaW5UZXh0ID0gXCJcIjtcbiAgICAkKFwiLmNob2ljZXNJdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcykudmFsKCkpIHtcbiAgICAgICAgam9pblRleHQgKz0gJCh0aGlzKS52YWwoKSArICcgfHx8fCAnO1xuICAgICAgICAkKFwiI3Rlc3RJdG9cIikudGV4dChqb2luVGV4dCk7XG4gICAgICAgICQoXCIjY2hvaWNlc190ZXh0XCIpLnZhbChqb2luVGV4dCk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cblxuXG5cblxuICAvL1xuICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yKCcjZjAwJyk7XG4gIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUuY29sb3IgPSBcIiMwZjBcIjtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2VzNi9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=