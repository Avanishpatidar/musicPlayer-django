    var audio = {
        init: function() {
        var $that = this;
            $(function() {
                $that.components.media();
            });
        },
        components: {
            media: function(target) {
                var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
                if (media.length) {
                    media.mediaelementplayer({
                        audioHeight: 40,
                    features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                        alwaysShowControls: true,
                        timeAndDurationSeparator: '<span></span>',
                        iPadUseNativeControls: true,
                        iPhoneUseNativeControls: true,
                        AndroidUseNativeControls: true
                    });
                }
            },
        
        },
    };
    audio.init();


    // var audio = {
    //     init: function() {
    //         var $that = this;
    //         $(function() {
    //             $that.components.media();
    //         });
    //     },
    //     components: {
    //         media: function(target) {
    //             var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
    //             if (media.length) {
    //                 media.mediaelementplayer({
    //                     audioHeight: 40,
    //                     features: ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
    //                     alwaysShowControls: true,
    //                     timeAndDurationSeparator: '<span></span>',
    //                     iPadUseNativeControls: true,
    //                     iPhoneUseNativeControls: true,
    //                     AndroidUseNativeControls: true,
    //                     success: function (mediaElement, originalNode) {
    //                         var songId = $(originalNode).data('song-id');
    //                         var lyricsElement = $('#song-lyrics-' + songId);

    //                         // Display lyrics when the audio player is playing
    //                         mediaElement.addEventListener('play', function () {
    //                             lyricsElement.show();
    //                         });

    //                         // Hide lyrics when the audio player is paused
    //                         mediaElement.addEventListener('pause', function () {
    //                             lyricsElement.hide();
    //                         });
    //                     }
    //                 });
    //             }
    //         },
    //     },
    // };
    // audio.init();

