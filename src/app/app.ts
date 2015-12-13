import {bootstrap, Component, NgFor, View} from "angular2/angular2";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {EventFormComponent} from './events/addEvent';

@Component({
    selector:'app',
    providers: [HTTP_PROVIDERS]
})
@View({
    template: `
    <div>
      <h1>Events</h1>
      <ul>
        <li *ng-for="#event of events">
          {{event.title}} {{event.maxAttendees}}
        </li>
      </ul>
    </div>
    <field-form></field-form>
    `,
    directives: [NgFor, EventFormComponent]
})
class App{
    events: Object[];

    constructor(http:Http) {
        http.get('http://localhost:3000/events').subscribe(res => {
            this.events = res.json();
        });
    }
}

bootstrap(App)
    .catch(err => console.error(err));


