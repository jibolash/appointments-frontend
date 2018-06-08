var appointment = (function() {
    var getAppointments = function(method, searchString) {
        var api_url = "http://localhost/cgi-bin/appointments-backend/appointments.cgi";
        $.ajax({
            url: api_url,
            method: method,
            data: searchString,
            dataType: "json",
            cache: false,
            success: function(result) {
                console.log('result is ' + JSON.stringify(result));
                if (method != "GET") {
                    $("div#message").text("Your appointment has been scheduled").css('color', 'green');
                    // alert("Your appointment has been scheduled");
                    appointment.clearForm();
                }
                addAppointmentsToTable(result.appointments);
            },
            error: function(result) {

            }
        });
    }

    var displayAppointmentForm = function() {
        $(document).on("click", "#new", function() {
            $(this).text("ADD").attr("id", "add");
            $("#cancel").show();
            $("form#appointment").show();
        });
    }

    var validateDate = function(dateString) {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
            $("div#message").text("Please enter a valid Date").css('color', 'red');
            return false;
        }

        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);

        if (year < 1000 || year > 3000 || month == 0 || month > 12) {
            $("div#message").text("Please enter a valid Date").css('color', 'red');
            return false;
        }


        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            monthLength[1] = 29;
        }

        var isValidDate = day > 0 && day <= monthLength[month - 1];

        if (isValidDate) {
            return true;
        } else {
            $("div#message").text("Please enter a valid Date").css('color', 'red');
            return false;
        }
    }

    var validateTime = function(time) {
        var regex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;
        if (regex.test(time)) {
            return true;
        }
        $("div#message").text("Please enter a valid Time").css('color', 'red');
        return false;
    }

    var validateDescription = function(description) {
        var description = $("#description").val();
        if (description.length == 0) {
            $("div#message").text("Please enter a valid description").css('color', 'red');
            return false;
        }
        return true;
    }

    var validateForm = function(appointment_date, appointment_time, description) {
        var isFormValid = true;

        if (!validateDate(appointment_date) || !validateTime(appointment_time) || !validateDescription(description)) {
            isFormValid = false;
        }

        return isFormValid;
    }

    var addAppointmentsToTable = function(data) {
        if ($.isEmptyObject(data)) {
            $("div#message").text("We couldn't find a match");
        } else {
            $('#appointment_list').empty();
            var trHTML = '';
            $.each(data, function(i, appointment) {
                trHTML += '<tr><td>' + appointment.date + '</td><td>' + appointment.time + '</td><td>' + appointment.description + '</td><tr>'
            });
            $('#appointment_list').append(trHTML);
        };
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
        getAppointments: getAppointments,
        displayAppointmentForm: displayAppointmentForm,
        validateForm: validateForm,
        cancelAppointmentForm: cancelAppointmentForm,
        clearForm: clearForm,
    };
})();

$(function() {
    appointment.displayAppointmentForm();
    appointment.cancelAppointmentForm();

    $("#appointment_date").datepicker({ minDate: 0 });
    $("#appointment_time").timepicker({ 'scrollDefault': 'now', 'timeFormat': 'H:i:s' });
    $(document).on("click", "a", function(event) {
        event.preventDefault();
        $("#new").text("UPDATE").attr("id", "add");
        $("#cancel").show();
        $("form#appointment").show();
    });

    $(document).on("click", "#add", function() {
        $("div#message").text("");

        var appointment_date = $("#appointment_date").val();
        var appointment_time = $("#appointment_time").val();
        var description = $("#description").val();

        if (appointment.validateForm(appointment_date, appointment_time, description)) {
            var newAppointment = { newFlag: "1", date: appointment_date, time: appointment_time, description: description }
            appointment.getAppointments("POST", newAppointment);
        } else {}
    });

    $(document).on("click", "#search", function() {
        $("div#message").text("");
        var searchString = $("#search_query").val();
        if (searchString.trim().length != 0) {
            appointment.getAppointments("GET", { searchString: searchString });
        }
        appointment.getAppointments("GET", { searchString: searchString });
    });
    appointment.getAppointments("GET", { all: 1 })
});