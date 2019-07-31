$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-default').addClass('btn-default');
            $item.addClass('btn-default');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-default').trigger('click');
});






$("#road").change(function() {
    if ($(this).val() == "select") {
     
      
     
    }

    else {
        $("roadshow1").hide()
      $('#roadshow2').hide();
      $('#roadshow3').hide();
      $('#roadshow4').hide();
      $('#otherField').removeAttr('required');
      $('#otherField').removeAttr('data-error');
    }
  });


$("#road").change(function() {
    if ($(this).val() == 1) {
      $('#roadshow1').show();
      
    }

    else {
      $('#roadshow2').hide();
      $('#roadshow3').hide();
      $('#roadshow4').hide();
      $('#otherField').removeAttr('required');
      $('#otherField').removeAttr('data-error');
    }
  });
  $("#seeAnotherField").trigger("change");
  

  $("#road").change(function() {
    if ($(this).val() == 2) {
      $('#roadshow1').show();
      $('#roadshow2').show();
      
    }

    else {
     
      $('#roadshow3').hide();
      $('#roadshow4').hide();
      
    }
  });
  
  $("#seeAnotherField").trigger("change");
  

  $("#road").change(function() {
    if ($(this).val() == 3) {
      $('#roadshow1').show();
      $('#roadshow2').show();
      $('#roadshow3').show();
     
    }

    else {
     
      
      $('#roadshow4').hide();
      $('#otherField').removeAttr('required');
      $('#otherField').removeAttr('data-error');
    }
  });

  $("#road").change(function() {
    if ($(this).val() == 4) {
      $('#roadshow1').show();
      $('#roadshow2').show();
      $('#roadshow3').show();
      $('#roadshow4').show();
      
    }

    else {
     
      
      
    
    }
  });
/*

  $(":radio").change(function(){
   
    if($(this).val()=="yes")
    {
      $("how").show();
    }
    else
    {
        $("#how").hide(); 
    }
      
    });


    /*
    just check
    */
   jQuery(document).ready( function () {
    $("#append").click( function(e) {
      e.preventDefault();
    $(".imp").append('<div class="controls">\
            <input class="form-control" type="text" name="textbox" placeholder="textbox">\
            <input class="form-control" type="text" name="text" placeholder="text">\
            <input class="form-control" type="text" name="text">\
            <a href="#" class="remove_this btn btn-danger">remove</a>\
            <br>\
            <br>\
        </div>');
    return false;
    });

jQuery(document).on('click', '.remove_this', function() {
    jQuery(this).parent().remove();
    return false;
    });
$("input[type=submit]").click(function(e) {
  e.preventDefault();
  $(this).next("[name=textbox]")
  .val(
    $.map($(".imp :text"), function(el) {
      return el.value
    }).join(",\n")
  )
})
});
  

 


