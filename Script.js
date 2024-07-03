function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();

    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();
    if (days < 0) {
        months--;
        days += daysInMonth(birthdate.getMonth(), birthdate.getFullYear());
    }
    var month = 12 - (monthDiff * -1);
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    if (monthDiff === 0) {
        document.getElementById('result').innerHTML = "Your age is: " + age + " Years" + " " + " " + days + " Days";
    }
    else {
        document.getElementById('result').innerHTML = "Your age is: " + age + " Years" + " " + month + " Month" + " " + days + " Days";
    }
}
function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}