app.controller("resultCtrl",($scope,quizMetrics,dataService)=>{
    $scope.score=quizMetrics.markQuiz.numCorrect;
    $scope.questionLength =dataService.quizQuestions.length;

    function calculatePerc(){
        return (quizMetrics.markQuiz.numCorrect / dataService.quizQuestions.length)*100;
    }
});