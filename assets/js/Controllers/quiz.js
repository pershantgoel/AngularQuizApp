app.controller("quizCtrl",QuizController);

function QuizController($scope,quizMetrics , dataService){
    
    // quizMetrics=quizMetrics;
    // dataService=dataService;
    $scope.questionData=dataService.quizQuestions ;
    $scope.activeQuestion=0;
    var numQuestionsAnswered=0;
    $scope.error=false;

    $scope.setActiveQuestion=(index)=>{
        if(index===undefined){
        var breakOut=false;
        var quizLength=dataService.quizQuestions.length-1 ; //it will take us to active quest
        while(!breakOut){
            $scope.activeQuestion=$scope.activeQuestion < quizLength ? ++$scope.activeQuestion : 0;
            if($scope.activeQuestion==0){
                $scope.error=true;
            }
            if(dataService.quizQuestions[$scope.activeQuestion].selected===null){
                breakOut=true;
            }
        }
        }
        else{
            $scope.activeQuestion=index;
        }
        
    }

    $scope.questionAnswered=()=>{
        var quizLength=dataService.quizQuestions.length;

        if(dataService.quizQuestions[$scope.activeQuestion].selected!==null){
            numQuestionsAnswered++;         //if quest is answered then we will increment the ans
        if(numQuestionsAnswered>=quizLength){
            //finalize quiz
            for(let i=0;i<quizLength;i++){
                if($scope.questionData[i].selected===null){
                    setActiveQuestion[i];
                    return; //we r returning(coming out of fn)
                }
            }
            $scope.error=false;
            return;
        }
        }
        $scope.setActiveQuestion();
    }

    $scope.selectAnswer=(index)=>{
        $scope.questionData[$scope.activeQuestion].selected=index;
    }

    $scope.finaliseAnswers=()=>{
        $scope.finalise=false;
        // numQuestionsAnswered=0;
        // $scope.activeQuestion=0;
        // quizMetrics.markQuiz();
        // quizMetrics.changeState("quiz",false);
        // quizMetrics.changeState("results",true);
    }
}