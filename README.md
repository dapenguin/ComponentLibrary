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

You can create routes for different request types, such as GET and POST. 

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

## Creating a new site

Create a route file for the site inside the *routes* folder.
Create a folder for the site inside the *routes* folder with the same name as the route file you created above. This is where you can keep any routes associated with that site.
Reference the route file inside *lib/setupRoutes.js*.


## Creating a new page for a site

### Step 1: Create the view

Inside the **views/pages** folder, create a Handlebars (.hbs) file for the page you want to create. Feel free create additional folders here to help organise your pages.

Inside the Handlebars file you have created, add whatever mark-up is needed for the page. Remember, this should just be the main content of the page. The header, footer, and any mark-up for the general structure of the page should be contained inside the layout Handlebars file.

### Step 2: Create the route

Inside the relevant route file for the site, add the following:

	router.get('/<page-url>', function(req, res, next) {
		var data = {
			title: '<page-title>',
			layout: ''
		};

		res.render('pages/<handlebars-page-name>', data);
	});

* **<page-url>** - The URL to access this page. This is relevant to the route for the route file you are in. So if the route for the route file is */checkout*, replacing <page-url> with */address* will make the URL for the page */checkout/address*.
* **<page-title>** - The title of the page that will appear within the <title> tag.
* **<handlebars-page-name>** - The path to the Handlebars file for the page, without the .hbs extension.
