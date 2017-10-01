angular.module("myapp", []).controller("demo", function($scope) {
    $scope.heroes = [
        { id: 1, name: "Thor" }, 
        { id: 2, name: "Spiderman "}
    ];

    $scope.removeHero = function (hero) {
        let result = confirm("¿Esta seguro ...?");
        if(result == true){
            $scope.heroes.splice($scope.heroes.indexOf(hero), 1);

        }
    }

    $scope.newHero = {};

    $scope.addHero = function () {
        if($scope.newHero.id != undefined && $scope.newHero.name != undefined) {
            $scope.heroes.push($scope.newHero);
            $scope.newHero = {};

        }
        
    }

    
    $scope.editHero = function(hero){
        $scope.selectedHero = hero;
        

    }
    $scope.updateHero = function(){

    }


    

});