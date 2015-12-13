var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var http_1 = require('angular2/http');
var addEvent_1 = require('./events/addEvent');
var App = (function () {
    function App(http) {
        var _this = this;
        http.get('http://localhost:3000/events').subscribe(function (res) {
            _this.events = res.json();
        });
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            providers: [http_1.HTTP_PROVIDERS]
        }),
        angular2_1.View({
            template: "\n    <div>\n      <h1>Events</h1>\n      <ul>\n        <li *ng-for=\"#event of events\">\n          {{event.title}} {{event.maxAttendees}}\n        </li>\n      </ul>\n    </div>\n    <field-form></field-form>\n    ",
            directives: [angular2_1.NgFor, addEvent_1.EventFormComponent]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], App);
    return App;
})();
angular2_1.bootstrap(App)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map