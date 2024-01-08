document.getElementById("btnSubmit").addEventListener("click", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var address = document.getElementById("address").value;
    var age = document.getElementById("age").value;
    var bfName = document.getElementById("bfName").value;
    var annivDate = document.getElementById("annivDate").value;

    if (fullName !== "Maryrose Czamyr S. Mestica") {
        alert("Incorrect Name!");
    }
    else if (age !== "20") {
        alert("Incorrect Age!");
    }
    else if (bfName !== "Greg Clarence E. Zausa") {
        alert("Incorrect Boyfriend's Name!");
    }
    else if(address != "Sitio Olalia Delarosa Brgy. Dela Paz Antipolo City, Rizal"){
        alert("Incorrect Address!");
    }
    else {
        var inputDate = new Date(annivDate);
        var targetDate = new Date("2021-11-24");

        if (inputDate.getTime() !== targetDate.getTime()) {
            alert("Incorrect Anniversary Date!");
        }
        else {
            window.location.href = 'confirmation.html';
        }
    }
});