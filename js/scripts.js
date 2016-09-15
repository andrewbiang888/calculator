var add = function(add1, add2) {
  return add1 + add2;
};

var subtract = function(subtract1, subtract2) {
  return subtract1 - subtract2;
};

var multiply = function(multiply1, multiply2) {
  return multiply1 * multiply2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


  $(document).ready(function() {
    $("form#add").submit(function(event) {
      var num1 = parseInt($("input#add1").val());
      var num2 = parseInt($("input#add2").val());
      var result = add(num1, num2);
      $("#addresult").text(result);
       $("#toggleresult").show();

       event.preventDefault();
    });

    $("form#subtract").submit(function(event) {
      var num3 = parseInt($("input#subtract1").val());
      var num4 = parseInt($("input#subtract2").val());
      var result = subtract(num3, num4);
      $("#subtractresult").text(result);
       $("#toggleresult2").show();

       event.preventDefault();
    });

    $("form#multiply").submit(function(event) {
      var num5 = parseInt($("input#multiply1").val());
      var num6 = parseInt($("input#multiply2").val());
      var result = multiply(num5, num6);
      $("#multiplyresult").text(result);
       $("#toggleresult3").show();

       event.preventDefault();
    });

    $("form#divide").submit(function(event) {
      var num7 = parseInt($("input#divide1").val());
      var num8 = parseInt($("input#divide2").val());
      var result = divide(num7, num8);
      $("#divideresult").text(result);
       $("#toggleresult4").show();

       event.preventDefault();
    });




  });
