# ComponentLibrary
Component Library running on Express

## Folder structure

```
data
|---dev
|---master
+---test
helpers
lib
public
routes
views
|---layouts
|---pages
+---partials
```

## Routes

Routes are where we tell the application how to handle different URLs.

## Working with data

There are 3 folders for organizing data for your pages and components:

* **/test** - Place data for test scripts in here
* **/master** - Where we keep a master copy of data for development
* **/dev** - Your playpit to store any data for anything currently in development

For each page, you can provide the template with data in the form of an object that can include the following properties:

* **title** - The title of the page that will appear within the `<title>` tag. If you have any text and separators that normally appear after the title for that page, they should be included in the layout template.
* **layout** - What layout template to use for this page. If not provided, then the default layout (defined in app.js) will be used.

## Views

All Handlebars files (.hbs) are kept in the following folders: 

* **/layouts** - Templates for different page layouts, such as single column, double column, with a sidebar, etc.
* **/pages** - Individual pages, such as homepage, login, product details, etc.
* **/partials** - Templates for individual components, such as header, carousel, tabset, etc.
