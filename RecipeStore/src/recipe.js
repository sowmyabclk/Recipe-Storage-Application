import {
  fetchLogIn,
  fetchLoginStatus,
  fetchLogout,
  fetchRecipeInfo,
  fetchRecipe,
  fetchRecipes
} from './services';


const appState = {
  isLoggedIn: false,
  recipeList: {},
  userList:{},
  recipeDetails:{},
  statusMessage: '',
  isRecipeDetails:false,
  isNewRecipe:false
};

const recipes = document.querySelector('.recipe-list'); 
const recipeHeading = document.querySelector('.recipe-heading');
const authorHeading = document.querySelector('.author-heading');
const status = document.querySelector('.status');
const login = document.querySelector('.login');
const logout = document.querySelector('.logout');
const recipeDetails = document.querySelector('.recipe-details');
const recipeListArea = document.querySelector('.recipe-list-area');
const newRecipeDetails = document.querySelector('.new-recipe-details');
const addNewReceipe = document.querySelector('.add-new-recipe');

const errMsgs = {
  'network-error': 'There was a problem connecting to the network, try again',
  'bad-login': 'name should not be empty,and does not include dog word',
  'not-allowed': 'something went wrong...',
  'unauthorized': "please login with username",
  'missing-name': "item name is missing",
  'empty-title':"please fill the title for the recipe",
  'empty-ingrediants':"please fill the ingrediant for the recipe",
  'empty-instructions':"please fill the instructions for the recipe"
};


function renderRecipeHeading(show){
if(show){
const html = `
    <label >Recipe Title</label>
     `
     recipeHeading.innerHTML = html;
}
else{
    recipeHeading.innerHTML = '';
}
}

function renderAuthorHeading(show){
if(show){
  const html = `
   <label >Author</label>
   `
    authorHeading.innerHTML = html;
  }
  else{
    authorHeading.innerHTML = '';
  }
  
  }

function renderLogin(show){
  const login = document.querySelector('.login');
  if(show){
    const html = `
      <div class = "login-info">
          <label class = "user-name">Username:</label><input class = "user" name="username" placeholder="Enter User name"/>
      </div>
      <button class ="to-login" type="submit">Login</button>
  `
    login.innerHTML = html;
  }
  else{
    login.innerHTML = ``;
  }
}

function renderaddNewRecipe(show){
if(show){
const html = `
        <button class = "add-recipe" type="submit">Add New Recipe</button>
    `
    addNewReceipe.innerHTML = html;
  }
else{
  addNewReceipe.innerHTML = '';
  }

}

function renderLogout(){
  const logout = document.querySelector('.logout');
  const html = `
    <button class = "to-logout" type="submit">Logout</button>
  `
  logout.innerHTML = html;
}


function renderStatusMessage( Message ) {
  status.innerHTML = Message;
}

function renderPage() {
if(!appState.isLoggedIn && !appState.isRecipeDetails && !appState.isNewRecipe)  {
   renderAuthorHeading(true);
   renderRecipeHeading(true);
   logout.innerHTML = '';
   renderRecipe(appState.recipeList);
   renderLogin(true);
   recipeListArea.append(recipes);
   renderRecipeDetails(appState.recipeDetails,false);
   renderaddNewRecipe(false);
   renderNewRecipeForm(false);
}
else if(appState.isRecipeDetails) {
   renderRecipeDetails(appState.recipeDetails,true);
   renderLogin(false);
   renderaddNewRecipe(false);
   recipeHeading.innerHTML = '';
   authorHeading.innerHTML = '';
   recipeListArea.innerHTML = '';
  }
  else if(appState.isNewRecipe){
   renderNewRecipeForm(true);
   renderLogout();
   renderaddNewRecipe(false);
   renderLogin(false);
   renderAuthorHeading(true);
   renderRecipeHeading(true);
   renderRecipe(appState.recipeList);
   recipeListArea.innerHTML = '';
   recipeHeading.innerHTML = '';
   authorHeading.innerHTML = '';
  }
  else if(appState.isLoggedIn && !appState.isNewRecipe|| appState.isLoggedIn && !appState.isRecipeDetails){
    renderNewRecipeForm(false);
    renderRecipeDetails(appState.recipeDetails,false);
    renderAuthorHeading(true);
    renderRecipeHeading(true);
    renderRecipe(appState.recipeList);
    recipeListArea.append(recipes);
    renderLogout();
    renderLogin(false);
    renderaddNewRecipe(true);
  }
else {
  renderLogin(false);
  renderRecipe(appState.recipeList);
  recipeListArea.append(recipes);
  renderNewRecipeForm(false);
  renderRecipeDetails(appState.recipeDetails,false);
  renderaddNewRecipe(false); 
}
renderStatusMessage(appState.statusMessage);
}

const renderRecipeDetails = (receipeDetails,show) => {
if(show){
  const html = `
    <div class = "author-name-details">
      <label class = "author-name-title">Author:</label><span class = "author-info">${receipeDetails.author}</span>
    </div>
    <div class = "recipe-name-details">
     <label class = "recipe-name-title">Title:</label><span class = "recipe-info">${receipeDetails.title}</span>
    </div>
    <div class = "recipe-ingrediant-details">
      <label class = "ingrediants-title">Ingrediants:</label><span class = "ingrediants-info">${receipeDetails.ingrediants}</span>
    </div>
    <div class = "recipe-instruction-details">
      <label class = "instructions-title">Instructions:</label><span class = "instructions-info">${receipeDetails.instructions}</span>
    </div>
    <a href="" class="return-from-display">Return To HomePage</a> 
  `
  recipeDetails.innerHTML = html;
}
else{
  recipeDetails.innerHTML = '';
  }
};

const renderNewRecipeForm = (show) => {
  if(show){
    const html = `
      <div class = "recipe-name-info">
        <label class = "recipe-name">Title:</label><input class = "new-title" type="text"  placeholder = "Enter an title"></input>
    </div>
    <div class = "recipe-ingrediants-info">
      <label class = "ingrediants">Ingrediants:</label><textarea class = "new-ingrediant" type="text"  placeholder = "Enter a ingrediants"></textarea>
    </div>
    <div class = "recipe-instructions-info">
      <label class = "instructions">Instructions:</label><textarea class = "new-instruction" type="text"  placeholder = "Enter an instruction"></textarea>
    </div>
    <div class = "outgoing">
      <button class = "to-submit" type="submit">Submit</button>
    <a href="" class="return-from-form">Return To HomePage</a> 
    </div>
  `
  newRecipeDetails.innerHTML = html;
}
else{
  newRecipeDetails.innerHTML = '';
  }
};

const renderRecipe = (recipeList) => {
      recipes.innerHTML = Object.keys(recipeList).map((key) => {
      const recipe = recipeList[key];
      return `
      <li class= "list">
      <a data-recipe-id="${recipe.recipeId}" href="" class="recipe-title" data-tooltip = "click for recipe Info">${recipe.title}</a> 
        <span data-recipe-id="${recipe.recipeId}" class="author-name">${recipe.author}</button>
      </li>
      `;
  }).join('\n');
};


recipes.addEventListener('click', (e) => {
if(e.target.classList.contains('recipe-title')) {
  e.preventDefault();
  const id = event.target.dataset.recipeId;
  fetchRecipeInfo(id)
  .then( (recipe) => {
    appState.isRecipeDetails = true;
    appState.statusMessage = '';
    appState.recipeDetails = recipe.recipeInfo;
    renderPage();
  })
  .catch((err) => {
    appState.statusMessage = errMsgs[err.error] || err.error;
    renderStatusMessage(appState.statusMessage);
  })
 }
});

login.addEventListener('click', (e) => {
if(e.target.classList.contains('to-login')) {
const username = document.querySelector('.user').value;
fetchLogIn(username)
.then( () => {
    appState.isLoggedIn = true;
    appState.isRecipeDetails = false;
    appState.isNewRecipe = false;
    appState.statusMessage = '';
    renderPage();
})
.catch( (err) => {
if (err.error == 'not-allowed' || err.error == 'unauthorized') {
  appState.isLoggedIn = false;
  appState.isNewRecipe = false;
  appState.isRecipeDetails = false;
  appState.recipeList = err.recipeList;
  appState.statusMessage = errMsgs[err.error] || err.error;
  renderPage();
}
else{
  appState.statusMessage = errMsgs[err.error] || err.error;
  renderStatusMessage(appState.statusMessage);
  }
});
}
});

logout.addEventListener('click', (e) => {
if(e.target.classList.contains('to-logout')) {
fetchLogout()
.then( () => {
    appState.isLoggedIn = false;
    appState.isNewRecipe = false;
    appState.isRecipeDetails = false;
    appState.statusMessage = '';
    renderPage();
})
}
});

recipeDetails.addEventListener('click', (e) => {
if(e.target.classList.contains('return-from-display')) {
  e.preventDefault();
     fetchRecipes()
      .then((recipes) => {
          appState.isRecipeDetails = false;
          appState.recipeList = recipes.recipeList;
          appState.statusMessage = '';
          renderPage();
      })
      .catch( (err) => {
        if (err.error == 'not-allowed' || err.error == 'unauthorized') {
          appState.isLoggedIn = false;
         appState.isNewRecipe = false;
         appState.isRecipeDetails = false;
         appState.recipeList = err.recipeList;
          renderPage();
        }
        else{
          appState.statusMessage = errMsgs[err.error] || err.error;
          renderStatusMessage(appState.statusMessage);
        }
    });
}
});

newRecipeDetails.addEventListener('click', (e) => {
if(e.target.classList.contains('return-from-form')) {
  e.preventDefault();
  fetchRecipes()
  .then((recipes) => {
      appState.isNewRecipe = false;
      appState.recipeList = recipes.recipeList;
      appState.statusMessage = '';
      renderPage();
  })
  .catch( (err) => {
    if (err.error == 'not-allowed' || err.error == 'unauthorized') {
      appState.isLoggedIn = false;
      appState.isNewRecipe = false;
      appState.isRecipeDetails = false;
      appState.recipeList = err.recipeList;
      appState.statusMessage = errMsgs[err.error] || err.error;
      renderPage();
    }
    else{
      appState.statusMessage = errMsgs[err.error] || err.error;
      renderStatusMessage(appState.statusMessage);
    }
  });
}

if(e.target.classList.contains('to-submit')) {
  const title = document.querySelector('.new-title').value;
  const ingrediants = document.querySelector('.new-ingrediant').value;
  const instructions = document.querySelector('.new-instruction').value;
  fetchRecipe(title,ingrediants,instructions)
  .then( (response) => {
    appState.isNewRecipe = true;
    appState.statusMessage = response.successMessage;
    appState.recipeList = response.recipeList;
    renderPage();
  })
  .catch( (err) => {
    if (err.error == 'not-allowed' || err.error == 'unauthorized') {
      appState.isLoggedIn = false;
      appState.isNewRecipe = false;
      appState.isRecipeDetails = false;
      appState.recipeList = err.recipeList;
      appState.statusMessage = errMsgs[err.error] || err.error;
      renderPage();
    }
    else{
      appState.statusMessage = errMsgs[err.error] || err.error;
      renderStatusMessage(appState.statusMessage);
    }
  });
}
});

addNewReceipe.addEventListener('click', (e) => {
  if(e.target.classList.contains('add-recipe')) {
        appState.isNewRecipe = true;
        appState.error = '';
        renderPage();
  }
});

fetchLoginStatus()
.then( (recipe) => {
  appState.isLoggedIn = true;
  appState.recipeList = recipe.recipeList;
  appState.statusMessage = '';
  renderPage();
})
.catch((err) => {
appState.isLoggedIn = false;
appState.recipeList = err.recipeList;
renderPage();
});