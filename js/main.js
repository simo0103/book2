$(document).ready(function(){
$('.element').hover(
    function(){ $(this).addClass('selected') },
    function(){ $(this).removeClass('selected') }
)

});
