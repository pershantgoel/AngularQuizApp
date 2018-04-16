app.controller("resultCtrl",($scope,quizMetrics,dataService)=>{
    $scope.score=quizMetrics.numCorrect;
    $scope.questionLength =dataService.quizQuestions.length;

    function calculatePerc(){
        return (quizMetrics.markQuiz.numCorrect / dataService.quizQuestions.length)*100;
    }
});