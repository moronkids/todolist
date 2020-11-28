const main = () => {
    let buttonSignout = document.getElementById('logout');
    if(buttonSignout) {
        if(buttonSignout.addEventListener('click', function() {
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('status');
            setTimeout(function () { document.location.href = "index.html" }, 0);
        }));
    }
    class Login {
        constructor(email, password) {
            this.email = email,
                this.password = password
            this.demail = "ardani@gmail.com",
                this.dpassword = "ardani"
        }

        get getResult() {
            let data;
            if (this.demail != this.email) {
                data = alert("Your email is wrong!")
            }
            else if (this.dpassword != this.password) {
                data = alert("Your password is wrong!")
            }
            else {
                localStorage.setItem("status", "logged");
                localStorage.setItem("name", "Ardani");

                data = true;
            }
            return data
        }
    }

    // regist
    let buttonLogin = document.getElementById('login');
    if (buttonLogin) {
        buttonLogin.addEventListener('click', function () {
            // alert('test')
            // let nameInput = document.getElementById('name').value;
            let emailInput = document.getElementById('email').value;
            let passwordInput = document.getElementById('password').value;
            let login = new Login(emailInput, passwordInput);
            if (login.getResult == true) {
                setTimeout(function () {
                    document.location.href = "dashboard.html" }, 0);
            } else {
                // setTimeout(function () { document.location.href = "index.html" }, 0);
            }
        });
    }
// const main2 = () => {
    class Register {
        constructor(name, email, password) {
            this.name = name,
                this.email = email,
                this.password = password

        }

        get getResult() {
            let data;
            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let passformat = /^[A-Za-z]\w{7,14}$/;
            if (!this.email.match(mailformat)) {
                data = alert('Email format is wrong')
            }
            else if (this.name == '') {
                data = alert('Name is not valid')

            } else if (!this.password.match(passformat)) {
                data = alert('Pass format is wrong')
            } else {
                localStorage.setItem("name", this.name);
                localStorage.setItem("email", this.email);
                localStorage.setItem("password", this.password);
                localStorage.setItem("status", "logged");
                document.getElementsByClassName('uname').value = localStorage.getItem("key");
                return true;
            }
            return data;
        }
    }
    let buttonRegist = document.getElementById('regist');
    if(buttonRegist) {
        // buttonLogin.add
        buttonRegist.addEventListener('click', function () {
            // alert('test')
            let nameInput = document.getElementById('name').value;
            let emailInput = document.getElementById('email').value;
            let passwordInput = document.getElementById('password').value;
            let login = new Register(nameInput, emailInput, passwordInput);
            if (login.getResult == true) {
                setTimeout(function () { document.location.href = "dashboard.html" }, 0);
            } else {
                // setTimeout(function () { document.location.href = "register.html" }, 0);
            }
        });
    }
}
// main2();
main();

// if (document.getElementsByClassName('uname').innerHTML = "Ardani";)