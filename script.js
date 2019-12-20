function currentgrade(){
    var finalWeights = document.getElementById("finalWeight").value;

    var homeworkGrades = document.getElementById("homeworkGrade").value;
    var homeworkArray = convertArrayStringToNumber(homeworkGrades);
    var homeworkAverage = averageArr(homeworkArray);
    console.log(homeworkAverage);
    var homeworkWeights = document.getElementById("homeworkWeight").value;
    var percentHW = homeworkAverage * (homeworkWeights/100);
    console.log(percentHW);

    var quizGrades = document.getElementById("quizGrade").value;
    var quizArray = convertArrayStringToNumber(quizGrades);
    var quizAverage = averageArr(quizArray);
    console.log(quizAverage);
    var quizWeights = document.getElementById("quizWeight").value;
    var percentQuiz = quizAverage * (quizWeights/100);
    console.log(percentQuiz);


    var testGrades = document.getElementById("testGrade").value;
    var testArray = convertArrayStringToNumber(testGrades);
    var testAverage = averageArr(testArray);
    console.log(testAverage);
    var testWeights = document.getElementById("testWeight").value;
    var percentTest = testAverage * (testWeights/100);
    console.log(percentTest);


    var projectGrades = document.getElementById("projectGrade").value;
    var projectArray = convertArrayStringToNumber(projectGrades);
    var projectAverage = averageArr(projectArray);
    console.log(projectAverage);
    var projectWeights = document.getElementById("projectWeight").value;
    var percentProject = projectAverage * (projectWeights/100);
    console.log(percentProject);


    var participationGrades = document.getElementById("participationGrade").value;
    var participationArray = convertArrayStringToNumber(participationGrades);
    var participationAverage = averageArr(participationArray);
    console.log(participationAverage);
    var participationWeights = document.getElementById("participationWeight").value;
    var percentParticipation = participationAverage * (participationWeights/100);
    console.log(percentParticipation);

    var finalWeights1 = parseInt(finalWeights);
    var testWeights1 = parseInt(testWeights);
    var quizWeights1 = parseInt(quizWeights);
    var homeworkWeights1 = parseInt(homeworkWeights);
    var projectWeights1 = parseInt(projectWeights);
    var participationWeights1 = parseInt(participationWeights);

    var sumOfWeight = finalWeights1 + testWeights1 + quizWeights1 + homeworkWeights1 + projectWeights1 + participationWeights1;
    console.log(sumOfWeight);

    if(sumOfWeight == 100){
        var nowGrades = 100*(percentParticipation + percentProject + percentTest + percentQuiz + percentHW)/(100-finalWeights);
        nowGrades = Math.round(nowGrades);
        console.log(nowGrades);
        document.getElementById("nowGrade").innerHTML = "Your current grade is " + nowGrades + "% and you need at least a...";
        return nowGrades;
    }else{
        document.getElementById("nowGrade").innerHTML = "ERROR! The weight percentages you have entered do not add up to 100% or the weight you entered is not a number. Please enter a valid weight.";
    }


}


function convertArrayStringToNumber(str){
    var arr = str.split(",");
    for(var i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    console.log(arr);
    return arr;
}


function averageArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var avg = sum/arr.length;
    return avg;
}


function finalgrade() {
    var finalWeights = document.getElementById("finalWeight").value;
    var homeworkWeights = document.getElementById("homeworkWeight").value;
    var quizWeights = document.getElementById("quizWeight").value;
    var testWeights = document.getElementById("testWeight").value;
    var projectWeights = document.getElementById("projectWeight").value;
    var participationWeights = document.getElementById("participationWeight").value;


    var finalWeights1 = parseInt(finalWeights);
    var testWeights1 = parseInt(testWeights);
    var quizWeights1 = parseInt(quizWeights);
    var homeworkWeights1 = parseInt(homeworkWeights);
    var projectWeights1 = parseInt(projectWeights);
    var participationWeights1 = parseInt(participationWeights);

    var sumOfWeight = finalWeights1 + testWeights1 + quizWeights1 + homeworkWeights1 + projectWeights1 + participationWeights1;
    console.log(sumOfWeight);


    var gradeWanted = document.getElementById("gradeWanted").value;
    var finalWeight = document.getElementById("finalWeight").value;

    var C = currentgrade();
    console.log(C);

    var W = finalWeight / 100;
    console.log(W);

    var G = gradeWanted;
    console.log(G);
    var one = 1 - W;


    var two = one * C;
    var three = G - two;
    var four = three / W;

    var finalNeeded = four;
    finalNeeded = Math.floor(finalNeeded);

    if (G <= 100 && G >= 0 && sumOfWeight==100) {
        document.getElementById("needGrade").innerHTML = finalNeeded + "%  on the final to get " + gradeWanted + "% in the class.";
    return finalNeeded;
    }else{
        document.getElementById("needGrade").innerHTML = "ERROR! Please enter a valid weight and desired grade (without the % symbol)."
    }

}


function reset(){
    var inputs = document.getElementsByTagName("input");
    console.log(inputs);
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
    document.getElementById("needGrade").innerHTML = '';
    document.getElementById("nowGrade").innerHTML = '';

}
