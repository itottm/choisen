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
	  var $choicesItem = document.getElementsByClassName('choicesItem'),
	      choiceCount = $choicesItem.length + 1;
	
	  function addInput(event) {
	    var target = event.target.parentNode;
	    if (target.className === 'choicesItem') {
	      if (!target.nextElementSibling.classList.contains('choicesItem')) {
	        var newList = document.createElement('li');
	        newList.className = 'choicesItem';
	        newList.innerHTML = '<label for=\'choicesItem' + choiceCount + '\'>選択肢' + choiceCount + '</label><input type=\'text\' id=\'choicesItem' + choiceCount + '\' class=\'choicesItemInput\'>';
	        target.parentNode.insertBefore(newList, target.nextElementSibling);
	        choiceCount++;
	      }
	    }
	  }
	
	  document.addEventListener('input', addInput, false);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGM3MmZlY2E5ZjE2YzQzYzQ5NWQiLCJ3ZWJwYWNrOi8vLy4vZXM2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE1BQU0sR0FBRyxZQUFZOzs7QUFHMUIsT0FBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztPQUMvRCxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0FBRXhDLFlBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN2QixTQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUNyQyxTQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssYUFBYSxFQUFFO0FBQ3RDLFdBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUNoRSxhQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNDLGdCQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUNsQyxnQkFBTyxDQUFDLFNBQVMsZ0NBQTZCLFdBQVcsY0FBUSxXQUFXLHFEQUE2QyxXQUFXLG1DQUE2QixDQUFDO0FBQ2xLLGVBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNuRSxvQkFBVyxFQUFFLENBQUM7UUFDZjtNQUNGO0lBQ0Y7O0FBRUQsV0FBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFFckQsQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMGM3MmZlY2E5ZjE2YzQzYzQ5NWRcbiAqKi8iLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXG4gIC8vaW5wdXTmrIToh6rli5Xov73liqBcbiAgbGV0ICRjaG9pY2VzSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nob2ljZXNJdGVtJyksXG4gICAgY2hvaWNlQ291bnQgPSAkY2hvaWNlc0l0ZW0ubGVuZ3RoICsgMTtcblxuICBmdW5jdGlvbiBhZGRJbnB1dChldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nob2ljZXNJdGVtJykge1xuICAgICAgaWYgKCF0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnY2hvaWNlc0l0ZW0nKSkge1xuICAgICAgICB2YXIgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld0xpc3QuY2xhc3NOYW1lID0gJ2Nob2ljZXNJdGVtJztcbiAgICAgICAgbmV3TGlzdC5pbm5lckhUTUwgPSBgPGxhYmVsIGZvcj0nY2hvaWNlc0l0ZW0ke2Nob2ljZUNvdW50fSc+6YG45oqe6IKiJHtjaG9pY2VDb3VudH08L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY2hvaWNlc0l0ZW0ke2Nob2ljZUNvdW50fScgY2xhc3M9J2Nob2ljZXNJdGVtSW5wdXQnPmA7XG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaXN0LCB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgY2hvaWNlQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFkZElucHV0LCBmYWxzZSk7XG5cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2VzNi9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=