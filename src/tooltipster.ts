
angular.module('ng-tooltipster', []).directive('tooltipster', ['$parse', function ($parse) {
    return {
        restrict: 'AC',
        replace: true,
        transclude: false,
        scope: {
            tooltipData: '=data'
        },
        compile: function (element, attrs) {

            var modelAccessor = $parse(attrs.ngModel);

            return function (scope, element, attrs2, controller) {

                var processChange = function () {
                    //console.log(modelAccessor, attrs.ngModel, attrs, attrs2, cfg);
                    console.log(attrs);

                    //scope.$apply(function (scope) {
                    // Change bound variable
                    //    modelAccessor.assign(scope, date);
                    //});
                };

                element.tooltipster({
                    functionBefore: processChange
                });

            };
        }
    }
}]);