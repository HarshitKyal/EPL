// routing path 
angular.module('eplApp').config(function($routeProvider){
  $routeProvider
    .when('/epl_15_16/:matchDetails/:date/:tCode/:tCode2',{
      templateUrl: 'pages/2015-16/matchDetails.html',
      controller: 'matchDetails',
      controllerAs: 'firstCtrl'
    })
    
    .when('/epl_15_16/:teamDetails/:tCode',{
      templateUrl: 'pages/2015-16/teamDetails.html',
      controller: 'teamSpecific',
      controllerAs: 'teamSpe'
    })
     .when('/epl_15_16/:leagueDetails',{
      templateUrl: 'pages/2015-16/leagueDetails.html',
      controller: 'engPreLea',
      controllerAs: 'EPL'   
     })
    .when('/leagueSummary15_16',{
      templateUrl: 'pages/2015-16/leagueSummary.html',
      controller: 'leagueSummary15_16',
      controllerAs: 'teamCtrl'   
     })
    .when('/epl_16_17/:date/:sCode/:sCode2',{
      templateUrl: 'pages/2016-17/third-view.html',
      controller: 'secondController',
      controllerAs: 'secondCtrl'
    })
     .when('/third',{
      templateUrl: 'pages/2016-17/third.html',
      controller: 'engPreLea2',
      controllerAs: 'EPL2'   
     })
    .when('/epl_16_17/:teamDetails/:tCode',{
      templateUrl: 'pages/2016-17/teamDetails.html',
      controller: 'teamSpecific16_17',
      controllerAs: 'teamSpe'
    })
      .when('/leagueSummary16_17',{
      templateUrl: 'pages/2016-17/leagueSummary.html',
      controller: 'leagueSummary16_17',
      controllerAs: 'teamCtrl'   
     })
    .otherwise({redirectTo: '/index.html'});
});


