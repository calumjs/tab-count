var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Service = (function () {
    function Service() {
    }
    Service.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.runService();
                        return [4, this.countAsync()];
                    case 1:
                        _a.sent();
                        return [4, this.refreshAsync()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Service.runService = function () {
        var _this = this;
        chrome.tabs.onCreated.addListener(function (tab) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.onTabCreated(tab)];
                case 1: return [2, _a.sent()];
            }
        }); }); });
        chrome.tabs.onActivated.addListener(function (info) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.onTabActivated(info)];
                case 1: return [2, _a.sent()];
            }
        }); }); });
        chrome.tabs.onAttached.addListener(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.onTabAttached()];
                case 1: return [2, _a.sent()];
            }
        }); }); });
        chrome.tabs.onDetached.addListener(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.onTabDetached()];
                case 1: return [2, _a.sent()];
            }
        }); }); });
        chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.onTabRemoved(tabId, removeInfo)];
                case 1: return [2, _a.sent()];
            }
        }); }); });
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            return true;
        });
    };
    Service.updateIcon = function () {
    };
    Service.onTabCreated = function (tab) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._creatingTabId = tab.id;
                return [2];
            });
        });
    };
    Service.onTabActivated = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var tabId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabId = info.tabId;
                        if (!(tabId == this._creatingTabId)) return [3, 2];
                        this._creatingTabId = 0;
                        return [4, this.delayAsync(100)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.countAsync()];
                    case 3:
                        _a.sent();
                        return [4, this.refreshAsync()];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Service.onTabAttached = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    Service.onTabDetached = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    Service.onTabRemoved = function (tabId, removeInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!removeInfo) return [3, 2];
                        return [4, this.delayAsync(100)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.countAsync()];
                    case 3:
                        _a.sent();
                        return [4, this.refreshAsync()];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Service.getCountByTab = function (tabId) {
        var _this = this;
        return new Promise(function (resolve) {
            chrome.tabs.get(tabId, function (tab) {
                var counts = _this.counts;
                var count = 1;
                if (counts != null) {
                    var wid = tab.windowId;
                    if (counts.has(wid)) {
                        count = counts.get(wid);
                    }
                }
                resolve(count);
            });
        });
    };
    Service.delayAsync = function (delay) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (r) {
                        setTimeout(r, delay);
                    })];
            });
        });
    };
    Service.refreshAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                text = "1";
                if (this.totalCount != null) {
                    text = this.totalCount.toString();
                }
                chrome.browserAction.setBadgeText({
                    text: text
                });
                return [2];
            });
        });
    };
    Service.countAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) {
                            var counts = new Map();
                            chrome.tabs.query({}, function (tabs) { return __awaiter(_this, void 0, void 0, function () {
                                var _i, tabs_1, tab, wid;
                                return __generator(this, function (_a) {
                                    this.totalCount = tabs.length;
                                    for (_i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
                                        tab = tabs_1[_i];
                                        wid = tab.windowId;
                                        if (counts.has(wid)) {
                                            counts.set(wid, counts.get(wid) + 1);
                                        }
                                        else {
                                            counts.set(wid, 1);
                                        }
                                    }
                                    this.counts = counts;
                                    resolve();
                                    return [2];
                                });
                            }); });
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return Service;
}());
Service.initialize();
