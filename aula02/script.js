$(function(){
    var index = 0;
    $('.pai .filho').each(function(){
        if(index%2 == 1){
           $(this).css('background', '#262626') 
        }
        console.log(index)
        index++;
    })
})