var app = angular.module('app', []);

app.controller("MainController", function() {
    this.num1 = 0;
    this.num2 = 0;

    this.tasks = [
        {
            name: "Create Database Scan script simulating OIS scan",
            done: false
        },
        {
            name: "Go Through Entire OIS Enterprise Secure Configuration Benchmark For Apache Web Server 2.2 Document",
            done: false
        },
        {
            name: "Finish Angular Tutorial on Udemy (From Zero to Hero)",
            done: false
        },
        {
            name: "Get Appliances for Kitchen",
            done: false
        },
        {
            name: "Paint the cabints in Kitchen black",
            done: false
        },
        {
            name: "Email Will about unlocking user add function for github in Jenkins",
            done: false
        },
        {
            name: "Email Will about enabling plugin configuration in Jenkins",
            done: false
        }
    ];

    this.remaining = function() {
      var count = 0;
      angular.forEach(this.tasks, function(task) {
        count =+ task.done ? 0 : 1;
      });
      return count;
    };

    this.add = function(newtask) {
      console.log("adding task: " + newtask.name);
      var task = {};
      task.name = newtask.name;
      task.done = false;
      this.tasks.push(task);
      newtask.name = "";
    };

    this.delete = function(task) {
      console.log("deleting task: " + task.name);
      for (var i=0; i < this.tasks.length; i++) {
        if (this.tasks[i].name === tasks.name) {
          this.tasks.splice(i,1);
          break;
        }
      }
    };
});

app.controller('MinMaxCtrl', function($scope) {
  $scope.formModel = {};
});

app.controller('BeerCounter', function($scope, $locale) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  if ($locale.id == 'en-us') {
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'ziande pivo',
      one: '{} pivo',
      few: '{} piva',
      other: '{} piv'
    };
  }
});
