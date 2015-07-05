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

## Working with data

There are 3 folders for organizing data for your pages and components:

* **/test** - Place data for test scripts in here
* **/master** - Where we keep a master copy of data for development
* **/dev** - Your playpit to store any data for anything currently in development

## Views

All Handlebars files (.hbs) are kept in the following folders: 

* **/layouts** - Templates for different page layouts, such as single column, double column, with a sidebar, etc.
* **/pages** - Individual pages, such as homepage, login, product details, etc.
* **/partials** - Templates for individual components, such as header, carousel, tabset, etc.
