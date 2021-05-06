$(function() {
  $("#calcsub").on("click", function() {
        if($('.foo').length){
          $('.foo').remove();
         $('#result_table').remove();
        }
        if($('.titles').length){
          $('.titles').remove();
        }
        if($('.bar').length){
          $('.bar').remove();
        }
        if($('.percGain').length){
          $('.percGain').remove();
        }
        if($('.sell_targ').length){
          $('.sell_targ').remove();
        }

    var quantity =$('.quant');
    var $buyin = $('.buyin');
    var $rtable = $buyin.closest('table');
//    var $total = $rtable.find(".total");
    if(parseFloat($buyin.val()) >= 0.000001){
    var table = $('<table>').addClass('foo').attr('id', $('.foo').text("result_table"));
    var theads = $('<tr>').addClass('titles');
    var perc_gain = $('<td>').addClass('percGain').text('Percent P/L');
    var sell_target =  $('<td>').addClass('sell_targ').text('long/short Target');
    var profits_each=  $('<td>').addClass('profeach').text('P/L per unit');
    var total_profit = $('<td>').addClass('profit_total').text('Total P/L');
    table.append(perc_gain);
    table.append(sell_target);
    table.append(profits_each);
    table.append(total_profit);
    table.append(theads);
    var i = -5.0;
    for(; i<=10.0; i+=0.2){

    var row = $('<tr>').addClass('bar');
    var perc_gain_act = $('<td>').addClass('percGain').text(parseFloat(i).toFixed(5) + ' %' );
    var targets = parseFloat((((i/100)+1)*parseFloat($buyin.val()))).toFixed(5);
    var sell_target_act =  $('<td>').addClass('sell_targ').text(targets);
    var ple = (parseFloat($buyin.val())-targets).toFixed(5);
      var profit = (parseFloat(quantity.val())*(parseFloat($buyin.val())-targets)).toFixed(5);
    
    var profits_each_act=  $('<td>').addClass('profeach').text(ple);



    var profit_total_act = $('<td>').addClass('profeach').text(profit);
    table.append(perc_gain_act);
    table.append(sell_target_act);
    table.append(profits_each_act);
    table.append(profit_total_act);
    table.append(row);
}

$('#here_table').append(table);
  }else{
  alert("minimum is 0.000001 ");
  }
  });
});
