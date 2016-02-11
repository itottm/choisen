window.onload = function () {

  //input欄自動追加


  function addInput(event) {
    let $choicesItem = document.getElementsByClassName('choicesItem'),
      choiceCount = $choicesItem.length + 1,
      $target = event.target.parentNode,
      joinText = "";
    if ($target.className === 'choicesItem') {
      if (!$target.nextElementSibling.classList.contains('choicesItem')) {
        var newList = document.createElement('li');
        newList.className = 'choicesItem';
        newList.innerHTML = `<label for='choicesItem${choiceCount}'>選択肢${choiceCount}</label><input type='text' id='choicesItem${choiceCount}' class='choicesItemInput'>`;
        $target.parentNode.insertBefore(newList, $target.nextElementSibling);
        choiceCount++;
      }
    }
    $(".choicesItemInput").each(function () {
      if ($(this).val()) {
        joinText += $(this).val() + ' |||| ';
        $("#choices_text").val(joinText);
      }
    })
  }

  document.addEventListener('input', addInput, false);

};
