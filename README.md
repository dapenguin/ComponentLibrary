# ComponentLibrary
Component Library running on Express

## Installing

To install this component library:

1. Create a directory for the application to sit in.
2. Inside that directory, use Git to clone this repository by typing the following into the command line:

		git clone https://github.com/dapenguin/component-library.git
3. Run `npm install` from the command line to install any node modules needed.

## Running

To run the component library, simply type the following into the command line:

`grunt dev`

This will run a grunt task that watches for two types of changes:
* Changes to .hbs and .js files - Any changes to these files in the **app** and **src** folders will restart the component library application.
* Changed to .scss files - This will trigger the task for compiling the Sass into CSS.

By default, this task works only with the default site folder. With a little bit of configuration in Gruntfile.js (to be documented later), you can specify which site you want to work on by running the following from the command line:

`grunt dev:siteName`

Then point your browser to `http://localhost:3000/cl` to see the component library itself. To view any other pages you've set up, simply point your browser to `http://localhost:3000/`, followed by the page name specified in the routes files. For example, to view the Home page, point your browser to `http://localhost:3000/home`.

## Folder structure

The following is how the folders are structured for the component library:

```
app
src
+-- default/
|   +-- components/
|   |   +-- buttons/
|   |   |   +-- _buttons.scss
|   |   |   +-- buttons.hbs
|   |   +-- paginationBar/
|   |   |   +-- _paginationBar.scss
|   |   |   +-- paginationBar.hbs
|   |   +-- productTile/
|   |       +-- _productTile.scss
|   |       +-- productTile.hbs
|   |
|   +-- data/
|   +-- layouts/
|   +-- pages/
|   |   +-- home/
|   |   |   +-- _home.scss
|   |   |   +-- home.hbs
|   |   +-- pdp/
|   |   |   +-- _pdp.scss
|   |   |   +-- pdp.hbs
|   |   +-- plp/
|   |       +-- _plp.scss
|   |       +-- plp.hbs
|   |
|   +-- routes/
|   |   +-- home.route.js
|   |   +-- pdp.route.js
|   |   +-- plp.route.js
|   |
|   +-- sass/
|       +-- _mixins.scss
|       +-- _reset.scss
|       +-- _variables.scss
|       +-- main.scss
|
+-- otherSite/
    ...
    ...
```

* **app** - Files for the core component library application live here. Unless a fix/updated is needed, you shouldn't be updating the files in this folder.
* **src** - Files that we update to maintain our pages and components in the library live here. These will be contained in separate folders for each site we look after, such as desktop and mobile. If we are ever asked to redesign the site, this will allow us to work separately from the existing source files. Within these folders, our files will be separated into:
	+ **components** - Files for the individual components that are used on the site (e.g. buttons, fields, overlays, etc.)
	+ **data** - Files containing data for use in pages and the component library.
	+ **layout** - Files that specify our different page layouts. (e.g. with a sidebar, without a sidebar, enclosed header, etc.) The default and most commonly used layout should be named default.hbs.
	+ **routes** - Any files for handling routing should be stored here. The component library will automatically set up any routes defined in this folder.
	+ **pages** - Files for the specific pages on the site (e.g. homepage, favourites, product details page, etc.)
	Each of the above will contain folders for each layout/page/component. These folders will ideally contain the Sass, Handlebars, test spec and JavaScript files for the layout/page/component. The thinking behind this is that it encourages a modular approach to how we code. For example, the _paginationBar.scss file should only contain code for styling what is in the pagination.hbs file.

## Routes

Routes are where we tell the application how to handle different URLs.

You can create routes for different request types, such as GET and POST. Your response for a route can be HTML, JSON or just plain text.

## Documenting your Handlebars templates

At the top of each Handlebars file, include a block comment `{{! comment goes here }}` and include the following information:

* What the template is used for.
* If it is a component, what pages it can be found in.
* What data it expects. For each data property, include the following:
	+ Property name
	+ Type (i.e. String, Boolean, Array, etc.)
	+ What the property is used for

So if we take a Handlebars file containing the mark-up for the main header on the site, it should look like this:

	{{!
	The global header for the site, including the navigation menu.

	Used on all pages within the site.

	Data
	====
	siteName      {String}  The name of the website, displayed across at the top of
	                        the header.
	navItems      {Array}   The items to be displayed in the navigation menu.
	navItems.href {String}  The URL the navigation item points to.
	navItems.text {String}  The text to be displayed for the navigation item.
	}}

	<header>
		<p class="siteName">{{siteName}}</p>
		<nav>
			<ul>
				{{#each navItems}}
					<li>
						<a href="{{href}}">{{text}}</a>
					</li>
				{{/each}}
			</ul>
		</nav>
	</header>

## Creating a new page for a site

### Step 1: Create the view

Inside the **pages** folder, create a Handlebars (.hbs) file for the page you want to create. Feel free create additional folders here to help organise your pages.

Inside the Handlebars file you have created, add whatever mark-up is needed for the page. Remember, this should just be the main content of the page. The header, footer, and any mark-up for the general structure of the page should be contained inside the layout Handlebars file.

### Step 2: Create the route

Inside the **routes** folder for the site, create a .routes.js file with the following code:

	var express = require('express');
	var router = express.Router();

	router.get('/[page-url]', function(req, res, next) {
		var data = {
			title: '[page-title]',
			layout: '[layout]',
			[additional-page-data]
		};

		res.render('pages/[handlebars-page-name]', data);
	});

	module.exports = router;

* **[page-url]** - The URL to access this page. This is relevant to the route for the route file you are in. So if the route for the route file is */checkout*, replacing <page-url> with */address* will make the URL for the page */checkout/address*.
* **[page-title]** - The title of the page that will appear within the `<title>` tag. If you have any text and separators that normally appear after the title for that page, they should ideally be included in the layout template, purely to avoid having to type them out for every page.
* **[layout]** - This property is optional. The name of the layout to use for this page. If omitted, will use the default.hbs layout file. 
* **[additional-page-data]** - Any addition data that needs to go on the page. The comments in the .hbs files for the layout/page/components being used should identify what data can be provided.
* **[handlebars-page-name]** - The path to the Handlebars file for the page, without the .hbs extension.
