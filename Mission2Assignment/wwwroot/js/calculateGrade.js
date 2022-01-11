//One of them needs to be commented out //


//HERE is the normal JavaScript//



document.getElementById("btnSend").addEventListener('click', function () {
    alert("Assignments: " + document.getElementById("from").value +
        ", Group Projects: " + document.getElementById("subject").value +
        ", Quizzes: " + document.getElementById("message").value);
})




//here is the jQuery shortcut//

//$("#btnSend").click(function () {
//    alert("Assignments: " + $("#assignments").val() +
//        ", Group Project: " + $("#group").val() +
//        ", Quizzes: " + $("#quiz").val() +
//        ", Exams: " + $("#exam").val() +
//        ", INTEX: " + $("#intex").val() +

//        );
//})