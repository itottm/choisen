window.onload = function () {

  //input欄自動追加


  function addInput(event) {
    let $choicesItem = document.getElementsByClassName('choicesItem'),
      choiceCount = $choicesItem.length,
      $target = event.target.parentNode,
      joinText = "";
    if ($target.className === 'choicesItem') {
      if (!$target.nextElementSibling.classList.contains('choicesItem')) {
        var newList = document.createElement('li');
        newList.className = 'choicesItem';

        newList.innerHTML = `<label for="poll_choices_attributes_${choiceCount}_choice">選択肢${choiceCount+1}</label><input id="poll_choices_attributes_${choiceCount}_choice" class="choicesItemInput" type="text" name="poll[choices_attributes][${choiceCount}][choice]">`;

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
