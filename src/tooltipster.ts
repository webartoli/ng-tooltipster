
angular.module('ng-tooltipster',[]).directive('tooltipster', function () {
    return {
        restrict: 'AC',
        link: function (scope, element, attrs: ngTooltipster.ITooltipsterConfig) {
            var config = <ngTooltipster.ITooltipsterConfig>scope.$eval(attrs);
            $(element).tooltipster(config);
        }
    }
});