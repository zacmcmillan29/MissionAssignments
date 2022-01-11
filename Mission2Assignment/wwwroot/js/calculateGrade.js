//One of them needs to be commented out //


//HERE is the normal JavaScript//



//document.getElementById("btnSend").addEventListener('click', function () {
//    alert("From: " + document.getElementById("from").value +
//        ", Subject: " + document.getElementById("subject").value +
//        ", Message: " + document.getElementById("message").value);
//})




//here is the jQuery shortcut//

$("#btnSend").click(function () {
    alert("From: " + $("#from").val() +
        ", Subject: " + $("#subject").val() +
        ", Message: " + $("#message").val());
})