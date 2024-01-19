# Ng17MicroFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Markdown to Create ng-17-Micro-Frontend Application
---

### Steps to Create Micro Application

1. Create Workspace MFA (Micro Frontend Application)

2. Create two Projects in Workspace

3. Create Apllication in Angular 17

    \`\`\`typescript
    ng new ng-17-Micro-Frontend;
    \`\`\`

    \`\`\`typescript
    ng new ng-17-Micro1;
    \`\`\`

4. Native Federation package in both porject;

    \`\`\`typescript
    npm i @angular-architects/native-federation -D
    \`\`\`

5. Making an application a host (shell):

    \`\`\`typescript
    ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
    \`\`\`

6. Making an application a remote (Micro Frontend):

    \`\`\`typescript
    ng g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote
    \`\`\`

7. run both porject

    \`\`\`typescript
      ng serve -o
      ng serve -o
    \`\`\`

8. upadte routing file of ng-17-Micro-Frontend app

    \`\`\`typescript

    export const APP_ROUTES: Routes = [
      {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
      },

      // Add this route:
      {
      path: 'micro1',
      loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
      },

      {
      path: '**',
      component: NotFoundComponent,
      },

      // DO NOT insert routes after this one.
      // { path:'**', ...} needs to be the LAST one.
      ];
    \`\`\`
