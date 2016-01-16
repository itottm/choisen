window.onload = function () {

  let choiceCount= $(".choicesItem").length + 1;
  $(document).on('input','.choicesItemInput', function(){
    if(!$(this).closest('.choicesItem').next('.choicesItem').length){
      $(this).closest('.choicesItem').after(`<li class="choicesItem"><label for="choicesItem${choiceCount}">選択肢${choiceCount}</label><input type="text" id="choicesItem${choiceCount}" class="choicesItemInput"></li>`);
      choiceCount++;
    }
    let joinText = "";
    $(".choicesItemInput").each(function () {
      if ($(this).val()) {
        joinText += $(this).val() + ' |||| ';
        $("#testIto").text(joinText);
        $("#choices_text").val(joinText);
      }
    })
  });

  //$("#pollLimit").on("change", function(){
  //  let val =  $(this).val();
  //  if(val == "15分"){
  //    $("#poll_limit").val("15.minutes.since");
  //  }else if(val == "30分"){
  //    $("#poll_limit").val("30.minutes.since");
  //  }
  //  }
  //);



  //
  //document.querySelectorAll('input').style.backgroundColor('#f00');
  //document.querySelector("main").style.color = "#0f0";
};
