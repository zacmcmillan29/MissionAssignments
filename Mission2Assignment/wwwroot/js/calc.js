
// javascript function

//document.getElementById("add").addEventListener('click', function () {
//    var n1 = document.getElementById("assignment").value;
//    var n1Weight = (parseInt(n1) * .55);

//    var n2 = document.getElementById("group").value;
//    var n2Weight = (parseInt(n2) * .05);


//    var n3 = document.getElementById("quiz").value;
//    var n3Weight = (parseInt(n3) * .1);

//    var n4 = document.getElementById("exam").value;
//    var n4Weight = (parseInt(n4) * .2);

//    var n5 = document.getElementById("intex").value;
//    var n5Weight = (parseInt(n5) * .1);

//    var total = n1Weight + n2Weight + n3Weight + n4Weight + n5Weight;
//    //alert(total);

//    var letterGrade = "";

//// This is the If statement for the letter grades!
  
//    if (total > 94) {
//        letterGrade = "A"
//    }
//    else if (total <= 93 && total > 90) {
//        letterGrade = "A-"
//    }
//    else if (total <= 89 && total > 86) {
//        letterGrade = "B+"
//    }
//    else if (total <= 86 && total > 83) {
//        letterGrade = "B"
//    }
//    else if (total <= 83 && total > 80) {
//        letterGrade = "B-"
//    }
//    else if (total <= 79 && total > 76) {
//        letterGrade = "C+"
//    }
//    else if (total <= 76 && total > 73) {
//        letterGrade = "C"
//    }
//    else if (total <= 73 && total > 70) {
//        letterGrade = "C-"
//    }
//    else if (total <= 69 && total > 66) {
//        letterGrade = "D+"
//    }
//    else if (total <= 66 && total > 63) {
//        letterGrade = "D"
//    }
//    else if (total <= 63 && total > 60) {
//        letterGrade = "D-"
//    }
//    else {
//        letterGrade = "E"
//    }



// alert("The total is: " + total + "%, which is a " + letterGrade);

//    var output = ("The total is: " + total + "%, which is a " + letterGrade);
//    document.getElementById("output").innerHTML = output;
//})





// need to write the jQuery here

$("#add").click(function () {
        var n1 = $("#assignment").val();
        var n1Weight = (parseInt(n1) * .55);

        var n2 = $("#group").val();
        var n2Weight = (parseInt(n2) * .05);


        var n3 = $("#quiz").val();
        var n3Weight = (parseInt(n3) * .1);

        var n4 = $("#exam").val();
        var n4Weight = (parseInt(n4) * .2);

        var n5 = $("#intex").val();
        var n5Weight = (parseInt(n5) * .1);

        var total = n1Weight + n2Weight + n3Weight + n4Weight + n5Weight;



        var letterGrade = "";

        // This is the If statement for the letter grades!

        if (total > 94) {
            letterGrade = "A"
        }
        else if (total <= 93 && total > 90) {
            letterGrade = "A-"
        }
        else if (total <= 89 && total > 86) {
            letterGrade = "B+"
        }
        else if (total <= 86 && total > 83) {
            letterGrade = "B"
        }
        else if (total <= 83 && total > 80) {
            letterGrade = "B-"
        }
        else if (total <= 79 && total > 76) {
            letterGrade = "C+"
        }
        else if (total <= 76 && total > 73) {
            letterGrade = "C"
        }
        else if (total <= 73 && total > 70) {
            letterGrade = "C-"
        }
        else if (total <= 69 && total > 66) {
            letterGrade = "D+"
        }
        else if (total <= 66 && total > 63) {
            letterGrade = "D"
        }
        else if (total <= 63 && total > 60) {
            letterGrade = "D-"
        }
        else {
            letterGrade = "E"
        }



        alert("The total is: " + total + "%, which is a " + letterGrade);

        var output = ("The total is: " + total + "%, which is a " + letterGrade);
        $("#output").html(output);
    })