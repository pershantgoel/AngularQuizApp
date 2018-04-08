app.controller("listCtrl",listController);
 
function listController(){
    var vm=this;
    vm.data=turtlesData;
    vm.activeTurtle={};
    vm.changeActiveTurtle=changeActiveTurtle;
    vm.activateQuiz=activateQuiz;
    vm.quizActive=false;

    function activateQuiz(){
        vm.quizActive=true;
    }
    
    function changeActiveTurtle(index){
        vm.activeTurtle=index;
    }
 }

 var turtlesData=[
     {
         type:"Green Turtle" ,
         image_url:"",
         locations:"tropical and subtropical",
         size:"upto 1.5m and upto 300kg" ,
         lifespan:"over 80 years",
         description:"lorem ipsum"
     },
     {
        type:"Red Turtle" ,
        image_url:"",
        locations:"tropical and subtropical",
        size:"upto 1.5m and upto 300kg" ,
        lifespan:"over 80 years",
        description:"lorem ipsum"
    },
    {
        type:"Grey Turtle" ,
        image_url:"",
        locations:"tropical and subtropical",
        size:"upto 1.5m and upto 300kg" ,
        lifespan:"over 80 years",
        description:"lorem ipsum"
    }
 ]