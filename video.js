var app = angular.module('app', []);

var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remotesVideos',
    // immediately ask for camera access
    autoRequestMedia: true,
    debug: false,
    detectSpeakingEvents: true,
    autoAdjustMic: false,
    url: 'http://localhost:8888/'
});

app.controller('video', [ '$scope', function ($scope) {
    webrtc.on('readyToCall', function () {
        $scope.createRoom = function () {
            webrtc.createRoom('andrew', function (err, name) {
                alert('created');
            });
        }

        $scope.joinRoom = function () {
            webrtc.joinRoom('andrew');
        }
    });

}]);


