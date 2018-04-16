app.factory("quizMetrics",(dataService)=>{
    var numCorrect=0;
    var quizObj={
        // resultActive:false,
        quizActive:false,
        correctAnswers:[],
        // numCorrect:0, 
        // markQuiz:markQuiz,
        markQuiz(){
            
            correctAnswers = dataService.correctAnswers;
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
            return numCorrect;
        }
        
        // finalScore:0
        
    }
    return quizObj;

    

});
