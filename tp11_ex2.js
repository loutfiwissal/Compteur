$(document).ready(function() {
    var counter = 0;

    function update() {
        $('#counterValue').text(counter);
    }
    $("#increase").click(function(){
        counter ++;
        update();
    })
    $("#decrease").click(function(){
        counter --;
        update();
    })
    $("#reset").click(function(){
        counter=0
        update();
    })


    })