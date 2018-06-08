var appointment = (function() {
    var displayAppointmentForm = function() {
        $(document).on("click", "#new", function() {
            $(this).text("ADD").attr("id", "add");
            $("#cancel").show();
            $("form#appointment").show();
        });
    }

    var cancelAppointmentForm = function() {
        $(document).on("click", "#cancel", function() {
            $("#message").text("");

            $(this).hide();
            $("#add")
                .text("NEW")
                .attr("id", "new");
            $("form#appointment").hide();
        });
    }

    var clearForm = function() {
        $("#appointment_date").val("");
        $("#appointment_time").val("");
        $("#description").val("");
    }

    return {
        displayAppointmentForm: displayAppointmentForm,
        cancelAppointmentForm: cancelAppointmentForm,
        clearForm: clearForm,
    };
})();

$(function() {
    appointment.displayAppointmentForm();
    appointment.cancelAppointmentForm();


});