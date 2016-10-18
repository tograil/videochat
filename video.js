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
    autoAdjustMic: false
});

app.controller('video', [ '$scope', function ($scope) {
    $scope.createRoom = function () {
        webrtc.createRoom('andrew', function (err, name) {
            webrtc.joinRoom('andrew');
        });
    }

    $scope.joinRoom = function () {
        webrtc.joinRoom('andrew');
    }
}]);


