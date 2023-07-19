const checkbox = document.getElementById('reg-log');
const sub_1 = document.getElementById('submit-1');
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {

        sub_2 = document.getElementById('submit-2');
        sub_2.addEventListener('click', function () {
            var name = document.getElementById('regname').value,
                email = document.getElementById('regemail').value,
                password = document.getElementById('regpass').value;
            if (name != "" && password != "" && email != "") { alert("Data Submitted but Not saved......!!\n.......Signup is in development........"); }
            else { alert("Please Fill All Fields"); }
        })
    }
});
sub_1.addEventListener('click', function () {
    var email = document.getElementById('logemail').value,
        password = document.getElementById('logpass').value;
    if (password == "1234" && email == "test@xyzmail.com") {
        window.location.href = "/Welcome/index.html";
    }
});
