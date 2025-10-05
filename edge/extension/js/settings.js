var Settings = (function () {
    function Settings() {
    }
    Object.defineProperty(Settings, "enabled", {
        get: function () {
            var item = localStorage.getItem("enabled");
            if (item == null)
                return true;
            return item == 'true';
        },
        set: function (v) {
            localStorage.setItem("enabled", v.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings, "theme", {
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
    return Settings;
}());
