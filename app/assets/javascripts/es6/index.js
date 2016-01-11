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

  var choiceCount= 3;
  $(document).on('input','.choicesItem', function(){
    if(!$(this).closest('tr').next().length){
      $(this).closest('tr').after(`<tr><th>選択肢${choiceCount} </th><td><input type="text" class="choicesItem"></td></tr>`);
      choiceCount++;
    }
    let joinText = "";
    $(".choicesItem").each(function () {
      if ($(this).val()) {
        joinText += $(this).val() + ' /// ';
        $("#testIto").text(joinText);
        $("#choices_text").val(joinText);
      }
    })
  });





  //
  //document.querySelectorAll('input').style.backgroundColor('#f00');
  //document.querySelector("main").style.color = "#0f0";
};
