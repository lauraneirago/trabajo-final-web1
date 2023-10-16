document.addEventListener("DOMContentLoaded", function () {
    // Resto del código...

    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verificar si el usuario ya existe en localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(user => user.username === username)) {
            alert("El nombre de usuario ya está registrado. Por favor, elija otro.");
            return;
        }

        // Guardar el nuevo usuario en localStorage
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuario registrado con éxito.");
        registrationForm.reset();
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("login-username").value;
        const loginPassword = document.getElementById("login-password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

        if (user) {
            alert("Inicio de sesión exitoso.");
            // Puedes redirigir al usuario a su panel de control de gastos aquí.
        } else {
            alert("Nombre de usuario o contraseña incorrectos. Intente nuevamente.");
        }

        loginForm.reset();
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    expenseForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const category = document.getElementById("category").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (isNaN(amount)) {
            alert("Por favor, ingrese un monto válido.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Categoría:</strong> ${category}, <strong>Monto:</strong> $${amount}`;
        expenseList.appendChild(listItem);

        // Limpiar el formulario después de registrar el gasto
        expenseForm.reset();
    });
});
