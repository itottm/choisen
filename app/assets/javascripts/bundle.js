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
	        choiceCount = $choicesItem.length + 1,
	        $target = event.target.parentNode,
	        joinText = "";
	    if ($target.className === 'choicesItem') {
	      if (!$target.nextElementSibling.classList.contains('choicesItem')) {
	        var newList = document.createElement('li');
	        newList.className = 'choicesItem';
	        newList.innerHTML = '<label for=\'choicesItem' + choiceCount + '\'>選択肢' + choiceCount + '</label><input type=\'text\' id=\'choicesItem' + choiceCount + '\' class=\'choicesItemInput\'>';
	        $target.parentNode.insertBefore(newList, $target.nextElementSibling);
	        choiceCount++;
	      }
	    }
	    $(".choicesItemInput").each(function () {
	      if ($(this).val()) {
	        joinText += $(this).val() + ' |||| ';
	        $("#choices_text").val(joinText);
	      }
	    });
	  }
	
	  document.addEventListener('input', addInput, false);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmVlN2Y5NmJkYjE2NDJlNjdlMDIiLCJ3ZWJwYWNrOi8vLy4vZXM2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE1BQU0sR0FBRyxZQUFZOzs7O0FBSzFCLFlBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN2QixTQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1NBQy9ELFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDckMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVTtTQUNqQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFNBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUU7QUFDdkMsV0FBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ2pFLGFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsZ0JBQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ2xDLGdCQUFPLENBQUMsU0FBUyxnQ0FBNkIsV0FBVyxjQUFRLFdBQVcscURBQTZDLFdBQVcsbUNBQTZCLENBQUM7QUFDbEssZ0JBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyRSxvQkFBVyxFQUFFLENBQUM7UUFDZjtNQUNGO0FBQ0QsTUFBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7QUFDdEMsV0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDakIsaUJBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDO0FBQ3JDLFVBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEM7TUFDRixDQUFDO0lBQ0g7O0FBRUQsV0FBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFFckQsQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNmVlN2Y5NmJkYjE2NDJlNjdlMDJcbiAqKi8iLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXG4gIC8vaW5wdXTmrIToh6rli5Xov73liqBcblxuXG4gIGZ1bmN0aW9uIGFkZElucHV0KGV2ZW50KSB7XG4gICAgbGV0ICRjaG9pY2VzSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nob2ljZXNJdGVtJyksXG4gICAgICBjaG9pY2VDb3VudCA9ICRjaG9pY2VzSXRlbS5sZW5ndGggKyAxLFxuICAgICAgJHRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLFxuICAgICAgam9pblRleHQgPSBcIlwiO1xuICAgIGlmICgkdGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nob2ljZXNJdGVtJykge1xuICAgICAgaWYgKCEkdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob2ljZXNJdGVtJykpIHtcbiAgICAgICAgdmFyIG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdMaXN0LmNsYXNzTmFtZSA9ICdjaG9pY2VzSXRlbSc7XG4gICAgICAgIG5ld0xpc3QuaW5uZXJIVE1MID0gYDxsYWJlbCBmb3I9J2Nob2ljZXNJdGVtJHtjaG9pY2VDb3VudH0nPumBuOaKnuiCoiR7Y2hvaWNlQ291bnR9PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2Nob2ljZXNJdGVtJHtjaG9pY2VDb3VudH0nIGNsYXNzPSdjaG9pY2VzSXRlbUlucHV0Jz5gO1xuICAgICAgICAkdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpc3QsICR0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgY2hvaWNlQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgJChcIi5jaG9pY2VzSXRlbUlucHV0XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcykudmFsKCkpIHtcbiAgICAgICAgam9pblRleHQgKz0gJCh0aGlzKS52YWwoKSArICcgfHx8fCAnO1xuICAgICAgICAkKFwiI2Nob2ljZXNfdGV4dFwiKS52YWwoam9pblRleHQpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFkZElucHV0LCBmYWxzZSk7XG5cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2VzNi9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=