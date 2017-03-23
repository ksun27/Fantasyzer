# Shoppy Shoperson

## Overview

Remembering what to buy at the grocery store is waaaaay too difficult. Also, shopping for groceries when you're hungry leads to regrettable purchases. Sooo... that's where Shoppy Shoperson comes in!

Shoppy Shoperson is a web app that will allow users to keep track of multiple grocery lists. Users can register and login. Once they're logged in, they can create or view their grocery list. For every list that they have, they can add items to the list or cross off items.


## Data Model

The application will need to store Users, Lists and Items

* users can have multiple lists
* each list can have multiple items

## [Link to commented first draft schema](db.js)

## Wireframes

/list/create - page for creating a new shopping list

![list create](documentation/list-create.png)

/list - page for showing all shopping lists

![list](documentation/list.png)

/list/slug - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

Add site map here

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

1. as a user, I can create a new grocery list
2. as a user, I can view all of the grocery lists I've created in a single list
3. as a user, I can add items to an existing grocery list
4. as a user, I can cross off items in an existing grocery list

## Research Topics

* (6 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (2 points) Some amazing new JavaScript library
    * the library does...
    * you can see it working in these pages:
        * link 1
        * link 2
    * I set it as 2 points because integration will be easy

    * addtional points will not count for extra credit
    
## [Link to Initial Main Project File](app.js)
