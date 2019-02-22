# angularjs_suggestion_box
Simple project for learning purposes

The project is based on an exercise proposed at a [Codecademy course](https://www.codecademy.com/learn/learn-angularjs).

## User stories
 As a user: 
- I want to be able to create a suggestion.
- I want to be able to upvote a suggestion.
- I want the most upvoted suggestions to rise to the top.
- I want to comment on a suggestion.

## Structure
The project uses a basic AngularJs structure, with the following folders:
### js
The scripts for the app, having:
- **controllers**: Every controller used by the app.
- **services**: Services used by the app to get some example data.
- **vendor**: Third-party scripts, such as angular.
- **app.js**: Main module for the app, with routing included in it.
### views
It contains the templates rendered by `ng-view`
