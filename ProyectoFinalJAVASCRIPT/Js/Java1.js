function validainputs() {

    const email = document.getElementById("email");

    const password = document.getElementById("password")

    const ingreso = document.getElementById("login");

    const emailval = email.value.trim();

    const passwordval = password.value.trim();

    // variable error para validar errores de ingreso

    var errorf = 0;

    if (emailval === "") {

        ocErrorform(email, "Por favor ingrese su email");

        errorf = 1;

    }

    else if (!valEmail(emailval)) {

        ocErrorform(email, "Email no valido");

        errorf = 1;

    }

    else {

        exitosform(email);

    }

    // Seccion de validacion de password

    if (passwordval === "") {

        ocErrorform(password, "Por favor ingrese su contraseña");

        errorf = 1;

    }

    else if (!valPassword(passwordval)) {

        ocErrorform(password, "Contraseña no valida");

        errorf = 1;

    }

    else {

        exitosform(password);

    }

    // Seccion de validacion de ingreso exitoso

    if (errorf == 0) {

        ingreso.addEventListener('click', function () {

            swal("ACCESO PERMITIDO !!", "Click OK para continuar", "success");

        })

    }

    return false;

    // función para validar errores en formularios

    function ocErrorform(input, message) {

        const formControl = input.parentElement;

        const small = formControl.querySelector("small");

        formControl.className = "form-control error";

        small.innerText = message;

    }

    // función para ingreso exitoso en formularios

    function exitosform(input) {

        const formControl = input.parentElement;

        formControl.className = "form-control success";

    }

    function valEmail(email) {

        return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);

    }

    function valPassword(password) {

        return /^[a-z0-9_-]{6,10}$/.test(password);

    }

}