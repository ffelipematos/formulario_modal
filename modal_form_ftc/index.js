function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

$(document).ready(function () {
    $("button").click(function () {
        //var form = JSON.stringify($("form").serializeArray());

        var form = getFormData($("form"));

        $.each(form, (function (key, val) {
            console.log(key, val);
        }))

        console.log(form);
    });

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 0 0000-0000');
});

function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if (!email.checkValidity()) {
        error.innerHTML = "Email invalido";
    }
}

function redefinirMsg() {
    var error = document.querySelector('#error-email');

    if (error.innerHTML == "Email invalido") {
        error.innerHTML = "";
    }
}

