var server = 'http://192.168.0.14:69';

angular.module('app.services', [])
        .factory('HttpGet', function ($http) {
            return {
                getMecer: function () {
                    // $http returns a promise, which has a then function, which also returns a promise.
                    var part = '/rock';
                    var url = server.concat(part);
                    console.log('Solicito: ', url)
                    return $http.get(url).then(function (response) {
                        // In the response, resp.data contains the result. Check the console to see all of the data returned.
                        console.log('Get mecer', response, response.data);
                        return response.data.rock;
                    })
                },
                getSonido: function () {
                    var part = '/crying';
                    var url = server.concat(part);
                    //console.log('Solicito: ', url);
                    return $http.get(url).then(function (response) {
                        //console.log('Get sonido', response, response.data);
                        return response.data.crying;
                    })
                },
		getProximidad: function () {
                    var part = '/proximity';
                    var url = server.concat(part);
                    //console.log('Solicito: ', url);
                    return $http.get(url).then(function (response) {
                        //console.log('Get proximidad', response, response.data);
                        return response.data.proximity;
                    });
                }
            };
        })

        .factory('HttpPost', function ($http) {
            return {
                login: function (info, callback, err) {
                    console.log("login");
                    return $http({
                        method: "POST",
                        url: server + '/usuarios/login',
                        data: {
                            "user": info.user,
                            "pass": info.pass
                        }
                    }).success(callback).error(err);
                }
			};
		})

         .factory('HttpPost1', function ($http) {
            return {  
                registro:function (info, callback, err) {
                    console.log("NEW");
                    return $http({
                        method: "POST",
                        url: server + '/usuarios/nuevo',
                        data: {
                            "user": info.user,
                            "pass": info.pass
                        }
                    }).success(callback).error(err);
                } }})
             
         .factory('HttpPost2', function ($http) {   
			return {  
                mov:function (info, callback, err) {
                    return $http({
                        method: "POST",
                        url: server + '/rock',
                        data: {"mover": info.valor}
                    }).success(callback).error(err);
                }
            };
        });
