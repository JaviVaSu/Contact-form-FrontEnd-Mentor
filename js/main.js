$(document).ready(function(){
    $("#submit").click(function(){

        if($("#nombre").val() != '' && $("#apellido").val() != '' && $("#correo").val() != '' && ($("#radio1").is(':checked') || $("#radio2").is(':checked')) && $("#mensaje").val() != '' && $("#check").is(':checked')){
            $("#error-nombre").css("display", "none");
            $("#error-apellido").css("display", "none");
            $("#error-correo").css("display", "none");
            $("#error-radio").css("display", "none");
            $("#error-mensaje").css("display", "none");
            $("#error-check").css("display", "nome");
            $("#mensaje-success").css("display", "block");
            $("#nombre").val('');
            $("#apellido").val('');
            $("#correo").val('');
            $("#nombre").val('');
            $("#radio1").prop('checked', false);
            $("#radio2").prop('checked', false);
            $("#mensaje").val('');
            $("#check").prop('checked', false);
        }else{
            $("#error-nombre").css("display", "block");
            $("#error-apellido").css("display", "block");
            $("#error-correo").css("display", "block");
            $("#error-radio").css("display", "block");
            $("#error-mensaje").css("display", "block");
            $("#error-check").css("display", "block");
            $("#nombre").val('');
            $("#apellido").val('');
            $("#correo").val('');
            $("#nombre").val('');
            $("#radio1").prop('checked', false);
            $("#radio2").prop('checked', false);
            $("#mensaje").val('');
            $("#check").prop('checked', false);
        }
    });
});