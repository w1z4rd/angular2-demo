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
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            styles: ["\n      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n      .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n      }\n      .selected { background-color: #EEE; color: #369; }\n      "],
            template: "\n  <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ng-for=\"#hero of heroes\" \n          [ng-class]=\"getSelectedClass(hero)\"\n          (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <div *ng-if=\"selectedHero\">\n      <h2>{{selectedHero.name}} details!</h2>\n      <div><label>id: </label>{{selectedHero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"></input>\n      </div>\n    </div>",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
angular2_1.bootstrap(AppComponent);
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
//# sourceMappingURL=app.js.map