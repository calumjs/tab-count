var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "isAutoEnabled", {
        get: function () {
            var item = localStorage.getItem("auto-enabled");
            if (item == null)
                return true;
            return item == "true";
        },
        set: function (v) {
            if (v) {
                localStorage.removeItem("auto-enabled");
            }
            else {
                localStorage.setItem("auto-enabled", "false");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "isSepia", {
        get: function () {
            var item = localStorage.getItem("sepia");
            if (item == null)
                return false;
            return item == "true";
        },
        set: function (v) {
            if (v) {
                localStorage.setItem("sepia", "true");
            }
            else {
                localStorage.removeItem("sepia");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "theme", {
        get: function () {
            var item = localStorage.getItem("theme");
            if (item == null)
                return "light";
            return item;
        },
        set: function (v) {
            localStorage.setItem("theme", v);
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
