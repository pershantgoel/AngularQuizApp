app.controller("listCtrl",($scope,$rootScope,quizMetrics , dataService)=>{
     // quizMetrics=quizMetrics;
     $scope.data=dataService.turtlesData;
      activeTurtle={};
     // changeActiveTurtle=changeActiveTurtle;
     // activateQuiz=activateQuiz;
 
     $scope.activateQuiz=()=>{
         $rootScope.quizActive=true;
        //  quizMetrics.changeState(true);
     }
     
     $scope.changeActiveTurtle=(index)=>{
         $scope.activeTurtle=index;
     }

     
});
 

 