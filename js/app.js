var app = angular.module('app', [
  'jcs-autoValidate',
  'angular-ladda'
]);

app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
      errorMessages['tooOld'] = 'You must be a max of {0} years old to use this site';
      errorMessages['badUsername'] = 'Username can only contain numbers and letters and _';
    });
  }
);


app.controller("CustController", function($scope, $http, $window) {
    
    $scope.search = {};
    $scope.selectedIndex = null;
    $scope.selectedCustomer = null;

    $scope.selectCustomer = function (customer, index) {
      $scope.selectedIndex = index;
      $scope.selectedCustomer = customer;
    };
    
    
    $scope.customers = [
        {
            name: "Robert Davis Jr",
            gender: "Male",
            year: 2016,
            done: false
        },
        {
            name: "Michael Jordan",
            gender: "Male",
            year: 2016,
            done: false
        },
        {
            name: "Michael Jackson",
            gender: "Male",
            year: 2017,
            done: false
        },
        {
            name: "Michael Johnson",
            gender: "Male",
            year: 2016,
            done: false
        },
        {
            name: "Mike Tyson",
            gender: "Male",
            year: 2017,
            done: false
        },
        {
            name: "Whitney Houston",
            gender: "Female",
            year: 2016,
            done: false
        }

    ];

    $scope.remaining = function() {
      var count = this.customers.length;
      var task_complete = 0;
      angular.forEach(this.customers, function(customer) {
        //count =+ task.done ? 0 : 1;
        if (customer.done) {
          task_complete = task_complete + 1;
        }
      });
      return count - task_complete;
    };

    $scope.add = function(newcustomer) {
      console.log("adding customer: " + newcustomer.name + " Year: " + newcustomer.year + " Gender: " + newcustomer.gender);
      var task = {};
      task.name = newcustomer.name;
      task.year = newcustomer.year;
      task.gender = newcustomer.gender;
      task.done = false;
      this.customers.push(task);
      newcustomer.name = "";
      newcustomer.year = ""; 
    };

    $scope.delete = function(task) {
      console.log("deleting task: " + task.name);
      for (var i=0; i < this.tasks.length; i++) {
        if (this.tasks[i].name === this.tasks.name) {
          this.tasks.splice(i,1);
          break;
        }
      }
    };
});

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
      var count = this.tasks.length;
      var task_complete = 0;
      angular.forEach(this.tasks, function(task) {
        //count =+ task.done ? 0 : 1;
        if (task.done) {
          task_complete = task_complete + 1;
        }
      });
      return count - task_complete;
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
        if (this.tasks[i].name === this.tasks.name) {
          this.tasks.splice(i,1);
          break;
        }
      }
    };
});

app.controller('MinMaxCtrl', function($scope, $http, $window) {
  $scope.formModel = {};
  $scope.submitting = false;
  
  $scope.onSubmit = function () {
    $scope.submitting = true;
    console.log("Hey I'm submitted!");
    console.log($scope.formModel);
    //send to an api endpoint
    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
      success(function (data) {
        console.log(":)");
        $window.alert('success :)')
        $scope.submitting = false;
      }).error(function(data) {
        console.log(":(");
        $scope.submitting = false;
      });
  };
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
