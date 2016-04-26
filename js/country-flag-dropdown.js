function initCountryCode(targetClass) {

  if(!$(targetClass).length) {
    console.log('no class in dom');
    return;
  }

  $(targetClass).hide();

  // DONE: Create advance country code html
  // DONE: Crete list of country codes
  var $ul = $('<ul/>'),
      list = [],
      selectedOption;
  $.each($('.country-code option'), function(i, option) {
    var $option = $(option);
    if($option.is(':selected')) {
      selectedOption = $option;
    }
    list.push('<li><a href="javascript:void(0)" class="jq-country-code" data-value="' + $option.val() + '" data-country="' + $option.data('country') + '" data-country-name="' + $option.data('country-name') + '"><span class="jq-flag-img"><img src="./img/' + $option.data('country') + '.png"></span>' + '<span class="jq-country-code-number">' + $option.val() + '</span>' + $option.data('country-name') + '</a></li>');
  });
  $ul.append(list.join(""));

  // DONE: Crete list of country codes container
  var $flagSelectionListContainer = $('<div/>', {
    class: 'jq-flag-selection-list'
  }).append($ul);

  // DONE: Crete flag container
  var $flagSelectionContainer = $('<a/>', {
    href: 'javascript:void(0)',
    class: 'jq-flag-selection'
  }).html('<img src="./img/' + selectedOption.data('country') + '.png" class="jq-selected-flag"><span class="jq-selected-country-code"> ' + selectedOption.val() + '</span> <span class="arrow-down"></span>');

  // DONE: Create advance country code container
  var $advanceCountryCode = $('<div/>', {
    class: 'advance-country-code'
  }).append($flagSelectionContainer).append($flagSelectionListContainer);

  // DONE: Append after the target element
  $(targetClass).after($advanceCountryCode);

  var $flagSelectionBtn   = $('.jq-flag-selection'),
      $flagSelectionList  = $('.jq-flag-selection-list'),
      $flagSelectionItems = $('.jq-country-code'),
      $selectedFlag       = $('.jq-selected-flag'),
      $selectedCode       = $('.jq-selected-country-code'),
      $target             = $('.country-code');

  $flagSelectionBtn.on('click', function(e) {
    e.stopPropagation();
    $flagSelectionList.toggle();
  });

  $flagSelectionItems.on('click', function() {
    var _this = $(this);
    $flagSelectionList.hide(1, resetArrLetter());
    $selectedFlag.attr('src', _this.children('img').attr('src'));
    $selectedCode.text(' ' + _this.data('value'));
    $('.jq-country-code').removeClass('active');
    _this.addClass('active');
    $target.val(_this.data('value')); // Sync advance county code to country code

    console.log('VALUE: ' + $target.val());
    console.log('COUNTRY CODE: ' +_this.data('country'));
    console.log('COUNTRY NAME: ' +_this.data('country-name'));
  });

  $flagSelectionItems.on('mouseover', function() {
    var _this = $(this);
    $('.jq-country-code').removeClass('active');
    _this.addClass('active');
  });

  // Sync county code to advance country code
  $target.on('change', function() {
    var _this = $(this);
    console.log(_this.val());
    $('.jq-country-code[data-value="' + _this.val() + '"]').trigger('click');
  });

  $(document).on('click', function(e) {
    e.stopPropagation();
    if(e.target.className != 'jq-flag-selection' || e.target.parentNode.className != 'jq-flag-selection') {
      $flagSelectionList.hide(1, resetArrLetter());
    }
  });
}

function resetArrLetter() {
  arrLetter = [];
}

var arrLetter = [],
    lastKeypress = 0, allowance = 0, lastQueryLetterLen = 0, ctr = 0;

// Listen to the keyboard press event to select country based on what the user typed
$(document).on('keypress', function(e) {
  // Only run this block of code when .jq-flag-selection-list is visible
  if($('.jq-flag-selection-list').is(':visible')) {

    e = e || window.event; // consider IE
    var code = e.keyCode || e.which; // consider IE

    // Reset the array if more than 1 second since the last stroke. So if you first type, "p" and then "h"
    // within 1 second you display "Philippines". But if you type "p", wait 2 seconds and then "h" you first
    // display "Panama" and then "Honduras".

    // Reset the array if there are more than 3 characters already
    if(arrLetter.length == 3 || (+new Date() > +allowance)) {
      arrLetter = [];
    }

    if(+new Date() > +allowance) {
      ctr = 0;
    }

    arrLetter.push(String.fromCharCode(code));
    arrLetter[0] = arrLetter[0].toUpperCase();

    $('.jq-country-code').removeClass('active');
    var $selectedItem = $('.jq-country-code[data-country-name^="' + String(arrLetter.join('')) + '"]:eq('+ ctr +')');

    if($selectedItem.length) {
      $selectedItem.addClass('active');

      // Make sure to see what is active. Scroll to it
      var selectedItemTop = $selectedItem.offset().top,
          parentTop = $('.jq-flag-selection-list').offset().top;

      $('.jq-flag-selection-list').scrollTop($('.jq-flag-selection-list').scrollTop() + (selectedItemTop - parentTop));
    } else {
      ctr++;

      // If you type "b" and the selected already starts with "b" then you select the next country
      // starting with "b". If there's no more countries after the selected country starting with "b", then you start over.
      lastQueryLetterLen = $('.jq-country-code[data-country-name^="' + String(arrLetter[0]) + '"]').length;

      if(ctr > (lastQueryLetterLen - 1)) {
        ctr = 0;
      }

      if(arrLetter.length > 1 && (arrLetter[0] == arrLetter[arrLetter.length - 1].toUpperCase())) {
        $('.jq-country-code').removeClass('active');
        var $newSelItem = $('.jq-country-code[data-country-name^="' + String(arrLetter[0]) + '"]:eq('+ ctr +')');
        $newSelItem.addClass('active');

        arrLetter.pop(); // Remove the item of the array
      }
    }

    lastKeypress = new Date(),
    allowance = new Date().setTime(lastKeypress.getTime() + 1000);
  }
});
