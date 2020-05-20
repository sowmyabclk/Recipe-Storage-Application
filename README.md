Description: a single page application to create, store and View Recipe details.

How to Run the Project

step-1: Download the Project from git repository
step-2: npm install to download the necessary packages
step-3: npm start to start the project


What this project does

### Home
* Displays a list of all stored recipes
* Offers the option to login or logout
* Clicking on a recipe title will load a details page/screen
* Clicking on the "New Recipe" button will to the New Recipe page/screen
  * This option is only shown for logged in users
* If a logged in user manually reloads the page, the page should show them as logged in

### Login
* user must provide a username to login
* username "dog" is treated as a bad login
* application shows useful error messages if a login is denied

### Logout 
* user will see the Home screen after logging out
* Another user can log in afterwards without requiring a new page load

### Recipe Details
* Displays the author, title, ingredients list, and instructions for the selected recipe
* You can click a "Return to Home" link to return to the Home Page

### New Recipe
* Displays a form to enter the title, ingredients list, and instructions for a new recipe
* The user is not allowed to enter a recipe without something present in all 3 fields
* The user can click a "Return to Home" link to return to the Home Page
* The user is put on the Recipe Details screen for the new recipe after successfully submitting a recipe.


