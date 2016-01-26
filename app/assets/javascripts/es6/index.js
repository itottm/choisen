window.onload = function () {

  //input欄自動追加
  let $choicesItem = document.getElementsByClassName('choicesItem'),
      choiceCount = $choicesItem.length + 1;

  function addInput(event) {
    let target = event.target.parentNode;
    if (target.className === 'choicesItem') {
      if (!target.nextElementSibling.classList.contains('choicesItem')) {
        var newList = document.createElement('li');
        newList.className = 'choicesItem';
        newList.innerHTML = `<label for='choicesItem${choiceCount}'>選択肢${choiceCount}</label><input type='text' id='choicesItem${choiceCount}' class='choicesItemInput'>`;
        target.parentNode.insertBefore(newList, target.nextElementSibling);
        choiceCount++;
      }
    }
  }

  document.addEventListener('input', addInput, false);

};
