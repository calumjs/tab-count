var Decolorizer = (function () {
    function Decolorizer() {
    }
    Decolorizer.run = function () {
        browser.runtime.sendMessage({
            'action': 'get-options',
        }, function (message) {
            var r = message;
            if (r == null)
                return;
            if (!r.isAutoEnabled)
                return;
            if (r.isSepia) {
                document.documentElement.style.filter = "sepia(100%)";
            }
            else {
                document.documentElement.style.filter = "grayscale(100%)";
            }
        });
        browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.command == 'toggle') {
                if (document.documentElement.style.filter == '') {
                    browser.runtime.sendMessage({
                        'action': 'get-options',
                    }, function (message) {
                        var r = message;
                        if (r == null)
                            return;
                        if (r.isSepia) {
                            document.documentElement.style.filter = "sepia(100%)";
                        }
                        else {
                            document.documentElement.style.filter = "grayscale(100%)";
                        }
                    });
                }
                else {
                    document.documentElement.style.filter = null;
                }
            }
        });
    };
    return Decolorizer;
}());
Decolorizer.run();
