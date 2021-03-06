(function(){
    'use strict';

    /**
     * This is a sample service
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('help').service('helpService', function($http, $q) {

        var helpContent = [];

        this.getHelpContent = function(){
            var deferred = $q.defer();

            if(helpContent.length === 0) {
                $http.get('/data/help.json').success(function (helpData) {
                    helpContent = helpData;
                    deferred.resolve(helpContent);
                });
            }else{
                deferred.resolve(helpContent);
            }

            return deferred.promise;
        };

    });

})();
