//One of them needs to be commented out //


//HERE is the normal JavaScript//



document.getElementById("btnSend").addEventListener('click', function () {
    alert("Assignments: " + document.getElementById("assignmets").value +
        ", Group Projects: " + document.getElementById("group").value +
        ", Quizzes: " + document.getElementById("quiz").value);
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