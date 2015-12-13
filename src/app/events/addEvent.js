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
var event_1 = require('./event');
var EventFormComponent = (function () {
    function EventFormComponent(http) {
        this.model = new event_1.Event(12, "test");
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    EventFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        this.http.post('http://localhost:3000/events', JSON.stringify(this.model), {
            headers: this.headers
        })
            .subscribe(function (res) {
            _this.response = res.json();
        });
    };
    EventFormComponent = __decorate([
        angular2_1.Component({
            selector: 'field-form',
            directives: [angular2_1.FORM_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS],
            template: "\n        <form (ng-submit)=\"onSubmit()\" #hf=\"form\">\n            <input type=\"number\" [(ng-model)]=\"model.maxAttendees\" ng-control=\"maxAttendees\">\n            <input type=\"text\" [(ng-model)]=\"model.title\" ng-control=\"title\">\n\n        <button type=\"submit\">Submit</button>\n        </form>\n        {{model.maxAttendees}}\n        {{response}}\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventFormComponent);
    return EventFormComponent;
})();
exports.EventFormComponent = EventFormComponent;
//# sourceMappingURL=addEvent.js.map