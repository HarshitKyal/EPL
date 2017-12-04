// routing path 
angular.module('eplApp').config(function($routeProvider){
  $routeProvider
    .when('/:type/:matchDetails/:date/:tCode/:tCode2',{
      templateUrl: 'pages/matchDetails.html',
      controller: 'matchDetails',
      controllerAs: 'firstCtrl'
    })
    
    .when('/:type/:teamDetails/:tCode',{
      templateUrl: 'pages/teamDetails.html',
      controller: 'teamSpecific',
      controllerAs: 'teamSpe'
    })
     .when('/:type/:leagueDetails',{
      templateUrl: 'pages/leagueDetails.html',
      controller: 'engPreLea',
      controllerAs: 'EPL'   
     })
    .when('/epl/:type/league/Summary',{
      templateUrl: 'pages/leagueSummary.html',
      controller: 'leagueSummary15_16',
      controllerAs: 'teamCtrl'   
     })
  
    .otherwise({redirectTo: '/index.html'});
});


