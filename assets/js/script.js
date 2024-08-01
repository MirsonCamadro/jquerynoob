  $(document).ready(function() {
    $(".text-body-secondary").click(function() {
        var idBoton = $(this).attr("id");
        $(".detalles").hide(); // Ocultar todos los detalles primero
        $("#detalles" + idBoton).toggle(); // Mostrar los detalles del destino correspondiente
    });

    $(".btn-close").click(function() {
        $(this).closest(".detalles").hide(); // Ocultar solo el contenedor de detalles correspondiente
    });
});
