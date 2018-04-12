app.factory("quizMetrics",(dataService)=>{
    var quizObj={
        // resultActive:false,
        quizActive:false,
        correctAnswers:[],
        numCorrect:0,   
        markQuiz:markQuiz
    }
    return quizObj;


    // function changeState(metric,state){
    //     if(metric==="quiz"){
    //         quizObj.quizActive=state;
    //     } else if(metric==="results"){
    //         quizObj.resultActive=state;
    //     }else{
    //         return false;
    //     }
    // }

    function markQuiz(){
        quizObj.correctAnswers = dataService.correctAnswers;
        for(let i=0 ; i<dataService.quizQuestions.length;i++){
            if(dataService.quizQuestions[i].selected===dataService.correctAnswers[i]){
                dataService.quizQuestions[i].correct=true;
                quizObj.numCorrect++;
            }
            else{
                dataService.quizQuestions[i].correct=false;
            }
        }
    }

});
