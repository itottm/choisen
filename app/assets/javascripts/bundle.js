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
	
	// ヘッダーCanvasアニメーション
	function animateHeader() {
		var TARGET = document.getElementById('logoCanvas');
		if (!TARGET) {
			return;
		}
		var STAGE = new createjs.Stage(TARGET);
		STAGE.enableMouseOver();
	
		for (var i = 0, max = 8; i < max; i++) {
			var RECT = new createjs.Shape();
			var bar_width = 40,
			    hue = i * (360 / max),
			    color = 'hsl(' + hue + ', 100%, 60%)',
			    x = i * bar_width;
	
			STAGE.addChild(RECT);
	
			RECT.graphics.clear().beginFill(color).drawRect(0, 0, bar_width, 300);
			RECT.x = x;
			RECT.y = 100;
			RECT.alpha = 0.7;
			createjs.Tween.get(RECT, { loop: true }).wait(i * 300).to({ y: 75 }, 1000, createjs.Ease.getPowInOut(2.2)).to({ alpha: 0, y: 100 }, 1200, createjs.Ease.getPowInOut(2));
			STAGE.addChild(RECT);
		}
	
		STAGE.update();
	
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener('tick', STAGE);
	}
	
	animateHeader();
	
	// input欄自動追加
	function addInput(event) {
		var $CHOICES_ITEM = document.getElementsByClassName('choicesItem');
		var choiceCount = $CHOICES_ITEM.length,
		    $target = event.target.parentNode,
		    joinText = "";
		if ($target.className === 'choicesItem') {
			if (!$target.nextElementSibling.classList.contains('choicesItem')) {
				var newList = document.createElement('li');
				newList.className = 'choicesItem';
	
				newList.innerHTML = '<input id="poll_choices_attributes_' + choiceCount + '_choice" class="choicesItemInput" type="text" name="poll[choices_attributes][' + choiceCount + '][choice]">';
	
				$target.parentNode.insertBefore(newList, $target.nextElementSibling);
				choiceCount++;
			}
		}
	}
	
	document.addEventListener('input', addInput, false);
	
	// infinitescroll
	$(function () {
		return $("#listPolls").infinitescroll({
			loading: {
				finishedMsg: "<p>finished</p>",
				msgText: "ロード中..."
			},
			navSelector: "nav.pagination",
			nextSelector: "nav.pagination a[rel=next]",
			itemSelector: "#listPolls li"
		});
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDU2NDk3MTNhY2QwYjEzMTUyOWMiLCJ3ZWJwYWNrOi8vLy4vZXM2L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckNBLFVBQVMsYUFBYSxHQUFHO0FBQ3hCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDckQsTUFBRyxDQUFDLE1BQU0sRUFBQztBQUNWLFVBQU87R0FDUDtBQUNELE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QyxPQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O0FBRXhCLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN0QyxPQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQyxPQUFJLFNBQVMsR0FBRyxFQUFFO09BQ2pCLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztPQUNyQixLQUFLLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxjQUFjO09BQ3JDLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDOztBQUVuQixRQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVyQixPQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEUsT0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWCxPQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNiLE9BQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLFdBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUNiLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDakQsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsUUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUNyQjs7QUFFRCxPQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7O0FBRWYsVUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsVUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDaEQ7O0FBRUQsY0FBYSxFQUFFOzs7QUFJZixVQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDeEIsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JFLE1BQUksV0FBVyxHQUFHLGFBQWEsQ0FBQyxNQUFNO01BQ3JDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVU7TUFDakMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNmLE1BQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUU7QUFDeEMsT0FBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ2xFLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsV0FBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7O0FBRWxDLFdBQU8sQ0FBQyxTQUFTLDJDQUF5QyxXQUFXLHFGQUFnRixXQUFXLGdCQUFhLENBQUM7O0FBRTlLLFdBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyRSxlQUFXLEVBQUUsQ0FBQztJQUNkO0dBQ0Q7RUFDRDs7QUFFRCxTQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7OztBQUduRCxFQUFDLENBQUMsWUFBWTtBQUNiLFNBQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQztBQUNyQyxVQUFPLEVBQUU7QUFDUixlQUFXLEVBQUUsaUJBQWlCO0FBQzlCLFdBQU8sRUFBRSxTQUFTO0lBQ2xCO0FBQ0QsY0FBVyxFQUFFLGdCQUFnQjtBQUM3QixlQUFZLEVBQUUsNEJBQTRCO0FBQzFDLGVBQVksRUFBRSxlQUFlO0dBQzdCLENBQUMsQ0FBQztFQUNILENBQUMsQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDU2NDk3MTNhY2QwYjEzMTUyOWNcbiAqKi8iLCIvLyDjg5jjg4Pjg4Djg7xDYW52YXPjgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbmZ1bmN0aW9uIGFuaW1hdGVIZWFkZXIoKSB7XG5cdGNvbnN0IFRBUkdFVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvQ2FudmFzJyk7XG5cdGlmKCFUQVJHRVQpe1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBTVEFHRSA9IG5ldyBjcmVhdGVqcy5TdGFnZShUQVJHRVQpO1xuXHRTVEFHRS5lbmFibGVNb3VzZU92ZXIoKTtcblxuXHRmb3IgKGxldCBpID0gMCwgbWF4ID0gODsgaSA8IG1heDsgaSsrKSB7XG5cdFx0Y29uc3QgUkVDVCA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuXHRcdGxldCBiYXJfd2lkdGggPSA0MCxcblx0XHRcdGh1ZSA9IGkgKiAoMzYwIC8gbWF4KSxcblx0XHRcdGNvbG9yID0gJ2hzbCgnICsgaHVlICsgJywgMTAwJSwgNjAlKScsXG5cdFx0XHR4ID0gaSAqIGJhcl93aWR0aDtcblxuXHRcdFNUQUdFLmFkZENoaWxkKFJFQ1QpO1xuXG5cdFx0UkVDVC5ncmFwaGljcy5jbGVhcigpLmJlZ2luRmlsbChjb2xvcikuZHJhd1JlY3QoMCwgMCwgYmFyX3dpZHRoLCAzMDApO1xuXHRcdFJFQ1QueCA9IHg7XG5cdFx0UkVDVC55ID0gMTAwO1xuXHRcdFJFQ1QuYWxwaGEgPSAwLjc7XG5cdFx0Y3JlYXRlanMuVHdlZW4uZ2V0KFJFQ1QsIHtsb29wOiB0cnVlfSlcblx0XHRcdC53YWl0KGkgKiAzMDApXG5cdFx0XHQudG8oe3k6IDc1fSwgMTAwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dJbk91dCgyLjIpKVxuXHRcdFx0LnRvKHthbHBoYTogMCwgeTogMTAwfSwgMTIwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dJbk91dCgyKSk7XG5cdFx0U1RBR0UuYWRkQ2hpbGQoUkVDVCk7XG5cdH1cblxuXHRTVEFHRS51cGRhdGUoKTtcblxuXHRjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDI0KTtcblx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBTVEFHRSk7XG59XG5cbmFuaW1hdGVIZWFkZXIoKTtcblxuXG4vLyBpbnB1dOashOiHquWLlei/veWKoFxuZnVuY3Rpb24gYWRkSW5wdXQoZXZlbnQpIHtcblx0Y29uc3QgJENIT0lDRVNfSVRFTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nob2ljZXNJdGVtJyk7XG5cdGxldCBjaG9pY2VDb3VudCA9ICRDSE9JQ0VTX0lURU0ubGVuZ3RoLFxuXHRcdCR0YXJnZXQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZSxcblx0XHRqb2luVGV4dCA9IFwiXCI7XG5cdGlmICgkdGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nob2ljZXNJdGVtJykge1xuXHRcdGlmICghJHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaG9pY2VzSXRlbScpKSB7XG5cdFx0XHR2YXIgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRuZXdMaXN0LmNsYXNzTmFtZSA9ICdjaG9pY2VzSXRlbSc7XG5cblx0XHRcdG5ld0xpc3QuaW5uZXJIVE1MID0gYDxpbnB1dCBpZD1cInBvbGxfY2hvaWNlc19hdHRyaWJ1dGVzXyR7Y2hvaWNlQ291bnR9X2Nob2ljZVwiIGNsYXNzPVwiY2hvaWNlc0l0ZW1JbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBvbGxbY2hvaWNlc19hdHRyaWJ1dGVzXVske2Nob2ljZUNvdW50fV1bY2hvaWNlXVwiPmA7XG5cblx0XHRcdCR0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGlzdCwgJHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuXHRcdFx0Y2hvaWNlQ291bnQrKztcblx0XHR9XG5cdH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhZGRJbnB1dCwgZmFsc2UpO1xuXG4vLyBpbmZpbml0ZXNjcm9sbFxuJChmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAkKFwiI2xpc3RQb2xsc1wiKS5pbmZpbml0ZXNjcm9sbCh7XG5cdFx0bG9hZGluZzoge1xuXHRcdFx0ZmluaXNoZWRNc2c6IFwiPHA+ZmluaXNoZWQ8L3A+XCIsXG5cdFx0XHRtc2dUZXh0OiBcIuODreODvOODieS4rS4uLlwiXG5cdFx0fSxcblx0XHRuYXZTZWxlY3RvcjogXCJuYXYucGFnaW5hdGlvblwiLFxuXHRcdG5leHRTZWxlY3RvcjogXCJuYXYucGFnaW5hdGlvbiBhW3JlbD1uZXh0XVwiLFxuXHRcdGl0ZW1TZWxlY3RvcjogXCIjbGlzdFBvbGxzIGxpXCJcblx0fSk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXM2L2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==