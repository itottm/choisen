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
	
	  //input欄自動追加
	
	  function addInput(event) {
	    var $choicesItem = document.getElementsByClassName('choicesItem'),
	        choiceCount = $choicesItem.length,
	        $target = event.target.parentNode,
	        joinText = "";
	    if ($target.className === 'choicesItem') {
	      if (!$target.nextElementSibling.classList.contains('choicesItem')) {
	        var newList = document.createElement('li');
	        newList.className = 'choicesItem';
	
	        newList.innerHTML = '<label for="poll_choices_attributes_' + choiceCount + '_choice">選択肢' + (choiceCount + 1) + '</label><input id="poll_choices_attributes_' + choiceCount + '_choice" class="choicesItemInput" type="text" name="poll[choices_attributes][' + choiceCount + '][choice]">';
	
	        $target.parentNode.insertBefore(newList, $target.nextElementSibling);
	        choiceCount++;
	      }
	    }
	    //$(".choicesItemInput").each(function () {
	    //  if ($(this).val()) {
	    //    joinText += $(this).val() + ' |||| ';
	    //    $("#choices_text").val(joinText);
	    //  }
	    //})
	  }
	
	  document.addEventListener('input', addInput, false);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2M5NmRjOGJkZDQyZmQ4Y2YxOGQiLCJ3ZWJwYWNrOi8vLy4vZXM2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE1BQU0sR0FBRyxZQUFZOzs7O0FBSzFCLFlBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN2QixTQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1NBQy9ELFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTTtTQUNqQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1NBQ2pDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDaEIsU0FBSSxPQUFPLENBQUMsU0FBUyxLQUFLLGFBQWEsRUFBRTtBQUN2QyxXQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDakUsYUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxnQkFBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7O0FBRWxDLGdCQUFPLENBQUMsU0FBUyw0Q0FBMEMsV0FBVyxxQkFBZSxXQUFXLEdBQUMsQ0FBQyxvREFBOEMsV0FBVyxxRkFBZ0YsV0FBVyxnQkFBYSxDQUFDOztBQUVwUSxnQkFBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JFLG9CQUFXLEVBQUUsQ0FBQztRQUNmO01BQ0Y7Ozs7Ozs7QUFBQSxJQU9GOztBQUVELFdBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBRXJELEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGNjOTZkYzhiZGQ0MmZkOGNmMThkXG4gKiovIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblxuICAvL2lucHV05qyE6Ieq5YuV6L+95YqgXG5cblxuICBmdW5jdGlvbiBhZGRJbnB1dChldmVudCkge1xuICAgIGxldCAkY2hvaWNlc0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaG9pY2VzSXRlbScpLFxuICAgICAgY2hvaWNlQ291bnQgPSAkY2hvaWNlc0l0ZW0ubGVuZ3RoLFxuICAgICAgJHRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLFxuICAgICAgam9pblRleHQgPSBcIlwiO1xuICAgIGlmICgkdGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nob2ljZXNJdGVtJykge1xuICAgICAgaWYgKCEkdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob2ljZXNJdGVtJykpIHtcbiAgICAgICAgdmFyIG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdMaXN0LmNsYXNzTmFtZSA9ICdjaG9pY2VzSXRlbSc7XG5cbiAgICAgICAgbmV3TGlzdC5pbm5lckhUTUwgPSBgPGxhYmVsIGZvcj1cInBvbGxfY2hvaWNlc19hdHRyaWJ1dGVzXyR7Y2hvaWNlQ291bnR9X2Nob2ljZVwiPumBuOaKnuiCoiR7Y2hvaWNlQ291bnQrMX08L2xhYmVsPjxpbnB1dCBpZD1cInBvbGxfY2hvaWNlc19hdHRyaWJ1dGVzXyR7Y2hvaWNlQ291bnR9X2Nob2ljZVwiIGNsYXNzPVwiY2hvaWNlc0l0ZW1JbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBvbGxbY2hvaWNlc19hdHRyaWJ1dGVzXVske2Nob2ljZUNvdW50fV1bY2hvaWNlXVwiPmA7XG5cbiAgICAgICAgJHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaXN0LCAkdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgIGNob2ljZUNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICAgIC8vJChcIi5jaG9pY2VzSXRlbUlucHV0XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIC8vICBpZiAoJCh0aGlzKS52YWwoKSkge1xuICAgIC8vICAgIGpvaW5UZXh0ICs9ICQodGhpcykudmFsKCkgKyAnIHx8fHwgJztcbiAgICAvLyAgICAkKFwiI2Nob2ljZXNfdGV4dFwiKS52YWwoam9pblRleHQpO1xuICAgIC8vICB9XG4gICAgLy99KVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhZGRJbnB1dCwgZmFsc2UpO1xuXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9lczYvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9