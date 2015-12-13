import {Component, FORM_DIRECTIVES, ControlGroup, Control} from "angular2/angular2";
import {HTTP_PROVIDERS, Http, Headers} from 'angular2/http';
import {Event} from './event'

@Component({
    selector: 'field-form',
    directives: [FORM_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    template: `
        <form (ng-submit)="onSubmit()" #hf="form">
            <input type="number" [(ng-model)]="model.maxAttendees" ng-control="maxAttendees">
            <input type="text" [(ng-model)]="model.title" ng-control="title">

        <button type="submit">Submit</button>
        </form>
        {{model.maxAttendees}}
        {{response}}
    `
})
export class EventFormComponent {
    response: String;
    http;
    model = new Event(12, "test");
    headers;


    constructor(http:Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    onSubmit(){
        console.log(this.model);
        this.http.post('http://localhost:3000/events',
            JSON.stringify(this.model), {
                headers: this.headers
            })
            .subscribe(res => {
                    this.response = res.json();
                }
            );
    }
}
