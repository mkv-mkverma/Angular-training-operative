# WorkshopsApp

## Zone.js

## angular 18 use vite its faster than webpack

## polyfills.js, main.js and style.css

## Decorators is a typescript annotations and its comes from angular code

selector name should be in two part because if tomorrow html add new element then it will protect

version 17 major change

standealone : true (not part of any module) | module is optional now splittling the code

in angular 16 and before it was part of module we have to split code into modules

## what is hot reloading

🎯 Why Use @if for Nested Conditions?
✅ Improved Readability → More structured and natural.
✅ Less Boilerplate → No ng-template required.
✅ Better Performance → Directly compiles into the DOM.

https://angular.dev/api/core/@if

@if(condition1) {
// Block 1
} @else if(condition2) {
// Block 2
} @else {
// Block 3
}

@for (item of items; track item.name) {

<li>{{ item.name }}</li>
} @empty {
<li>There are no items.</li>
}

@if(loading) {
<app-loading-spinner></app-loading-spinner>
} @else if( !loading && error ) {
<app-error-alert></app-error-alert>
} @else {
@for (item of items; track item.name) {

<li>{{ item.name }}</li>
} @empty {
<li>There are no items.</li>
}
}

@let user = user$ | async;
@if (user) {

  <h1>Hello, {{user.name}}</h1>
  <user-avatar [photo]="user.photo"/>
  <ul>
    @for (snack of user.favoriteSnacks; track snack.id) {
      <li>{{snack.name}}</li>
    }
  </ul>
  <button (click)="update(user)">Update profile</button>
}

@switch (condition) {
@case (caseA) {
Case A.
}
@case (caseB) {
Case B.
}
@default {
Default case.
}
}

@Input('error') error: Error | null = null;

ngOnChanges(changes: SimpleChanges): void {
const error: SimpleChange = changes['error'];
if (error.currentValue) {
console.error(error.currentValue);
}
}

ng g c menu
ng g i workshops/models/IWorkshops
ng g s workshops/workshops
ng g p common/location

http://localhost:4200/workshops/add

if we dont add [routerLinkActiveOptions]="{exact: true}"
then home workshop and add workshop tab all will be active if visited because

/ home | /workshops | /workshops/add

// TODO: Need to search
prevent default

aria-controls="navbarNav"
aria-expanded="!isNavbarCollapsed"
aria-label="Toggle navigation"
role="button"
aria-attribute
tabIndex
aria-mmm = disable
aria-current="page"
aria-labelledby="navbarDropdown1"
aria-current="page"
// HTML
section | Article | Header | Footer
