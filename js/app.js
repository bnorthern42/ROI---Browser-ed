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


    var $buyin = $('.buyin');
    var $rtable = $buyin.closest('table');
//    var $total = $rtable.find(".total");
    if(parseFloat($buyin.val()) >= 0.000001){
    var table = $('<table>').addClass('foo').attr('id', $('.foo').text("result_table"));
    var theads = $('<tr>').addClass('titles');
    var perc_gain = $('<td>').addClass('percGain').text('Percent Gain / Loss');
    var sell_target =  $('<td>').addClass('sell_targ').text('sell Target');
    table.append(perc_gain);
    table.append(sell_target);
    table.append(theads);

    for(i=-5.0; i<=10.0; i+=0.2){

    var row = $('<tr>').addClass('bar');
    var perc_gain_act = $('<td>').addClass('percGain').text(parseFloat(i).toFixed(5) + ' %' );
    var sell_target_act =  $('<td>').addClass('sell_targ').text(parseFloat((((i/100)+1)*parseFloat($buyin.val()))).toFixed(5));
    table.append(perc_gain_act);
    table.append(sell_target_act);
    table.append(row);
}

$('#here_table').append(table);
  }else{
  alert("minimum is 0.000001 ");
  }
  });
});
