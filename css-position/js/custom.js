/**
 * Created by ECLOUD1 on 1/26/2016.
 */
$(document).ready(function(){
    $("#absoluteBtn").click(function(){
        $('#absolute').toggleClass('absolute')
    });
    $("#relativeBtn").click(function(){
        $('#relative').toggleClass('relative')
    });
    $("#fixedBtn").click(function(){
        $('#fixed').toggleClass('fixed')
    });
});