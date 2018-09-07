$(document).ready(function(){
    $(".skill-panel").click(function(){
        var panelID= $(this).attr('data-panelID');
        $('#'+panelID).slideToggle();
    })             
})