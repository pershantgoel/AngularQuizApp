app.factory("quizMetrics",(dataService)=>{
    
    var quizObj={
        // resultActive:false,
        quizActive:false,
        correctAnswers:[],
        // numCorrect:0, 
        markQuiz:markQuiz
        // finalScore:0
        
    }
    return quizObj;

    function markQuiz(){
        var numCorrect=0;
        quizObj.correctAnswers = dataService.correctAnswers;
        for(let i=0 ; i<dataService.quizQuestions.length;i++){
            if(dataService.quizQuestions[i].selected===dataService.correctAnswers[i]){
                dataService.quizQuestions[i].correct=true;
                 numCorrect ++;
                
                console.log(numCorrect);
                // finalScore=numCorrect;
            }
            else{
                dataService.quizQuestions[i].correct=false;
            }
        }
    }

});
