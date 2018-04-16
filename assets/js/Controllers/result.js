app.controller("resultCtrl",($scope,quizMetrics,dataService)=>{
    
    $scope.questionLength =dataService.quizQuestions.length;

    
    $scope.calculatePerc=()=>{
        var perc=$scope.score;
        console.log("score");
        $scope.percentage=((perc / dataService.quizQuestions.length)*100) +"%";
    }
});