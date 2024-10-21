$('#txt').click(()=>{
 $('#p1').text($('#p2').text());
});

$('#htm').click(()=>{
 $('#p1').text($('#p2').html());
});

$('#inp').click(()=>{
 $('#p1').text($('#inp1').val());
});