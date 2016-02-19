// app.service("UserService",['$resource', function($resource){
// 	return $resource('/api/users/:id', {id: '@_id'}, {
// 		update : {
// 			method: 'PUT'
// 		}
// 	});
// }]);

app.service("AdultService",['$resource', function($resource){
	return $resource('/api/adults/:id', {id: '@_id'}, {
		update : {
			method: 'PUT'
		}
	});
}]);

app.service("ChildService",['$resource', function($resource){
	return $resource('/api/children/:id', {id: '@_id'}, {
		update : {
			method: 'PUT'
		}
	});
}]);

//SIG DIRECTIVE
app.directive('jSignatureDirective', function() {
    return {
        restrict: 'E',
        template: '<div id="signature"><div id="jSignature"></div><button ng-click="reset()">reset</button><button ng-click="getData()">getData</button><button ng-click="setData()">setData</button></div>',
        scope: {
            sig: '=',
            width: '@',
            height: '@',
            color: '@',
            bgColor: '@',
            lineWidth: '@',
            cssclass: '@',
            save: '='
        },
        link: function($scope, $element) {

            console.log('jSignatureDirective: link');
            console.dir($scope, $element);

            $scope.initialized = false;

            var options = {
                width: $scope.width,
                height: $scope.height,
                color: $scope.color,
                'background-color': $scope.bgColor,
                lineWidth: $scope.lineWidth,
                cssclass: $scope.cssclass
            };

            $scope.initialize = function() {
                if (!$scope.initialized) {
$element.find('#jSignature').jSignature(options);
                    $scope.initialized = true;
                }
            };

            $scope.reset = function() {
                console.log('reset!!!');
                $element.jSignature('reset');
            };

            $scope.getData = function() {
                console.log('getData!!!');
                var datapair = $element.jSignature('getData', 'base30');
                var svg = $element.jSignature('getData', 'svg');
                console.dir(datapair);
                //alert(datapair);
                  //              alert(svg);
                $scope.save(svg);
            };

            $scope.setData = function(sig) {
                console.log('setData!!!');
                
                

                if (sig) {
                    datapair = sig;
                }
                console.log(datapair);
                $element.jSignature('setData', 'data:' + datapair.join(','));
            };


            $scope.initialize();
//            $scope.setData();


            $scope.$watch('sig', function(sig) {
                if (sig) {
                    console.log('watch if ' + sig);
                    $scope.setData(sig);
                    //alert('watch if ' + sig);

                    return;
                }
                console.log('watch else');

            });


        }
    };
});