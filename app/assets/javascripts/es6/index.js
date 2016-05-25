// ヘッダーCanvasアニメーション
function animateHeader() {
	const TARGET = document.getElementById('logoCanvas');
	if(!TARGET){
		return;
	}
	const STAGE = new createjs.Stage(TARGET);
	STAGE.enableMouseOver();

	for (let i = 0, max = 8; i < max; i++) {
		const RECT = new createjs.Shape();
		let bar_width = 40,
			hue = i * (360 / max),
			color = 'hsl(' + hue + ', 100%, 60%)',
			x = i * bar_width;

		STAGE.addChild(RECT);

		RECT.graphics.clear().beginFill(color).drawRect(0, 0, bar_width, 300);
		RECT.x = x;
		RECT.y = 100;
		RECT.alpha = 0.7;
		createjs.Tween.get(RECT, {loop: true})
			.wait(i * 300)
			.to({y: 75}, 1000, createjs.Ease.getPowInOut(2.2))
			.to({alpha: 0, y: 100}, 1200, createjs.Ease.getPowInOut(2));
		STAGE.addChild(RECT);
	}

	STAGE.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener('tick', STAGE);
}

animateHeader();


// input欄自動追加
function addInput(event) {
	const $CHOICES_ITEM = document.getElementsByClassName('choicesItem');
	let choiceCount = $CHOICES_ITEM.length,
		$target = event.target.parentNode,
		joinText = "";
	if ($target.className === 'choicesItem') {
		if (!$target.nextElementSibling.classList.contains('choicesItem')) {
			var newList = document.createElement('li');
			newList.className = 'choicesItem';

			newList.innerHTML = `<input id="poll_choices_attributes_${choiceCount}_choice" class="choicesItemInput" type="text" name="poll[choices_attributes][${choiceCount}][choice]">`;

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
