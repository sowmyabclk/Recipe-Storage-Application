/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/recipe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");

var appState = {
  isLoggedIn: false,
  recipeList: {},
  userList: {},
  recipeDetails: {},
  statusMessage: '',
  isRecipeDetails: false,
  isNewRecipe: false
};
var recipes = document.querySelector('.recipe-list');
var recipeHeading = document.querySelector('.recipe-heading');
var authorHeading = document.querySelector('.author-heading');
var status = document.querySelector('.status');
var login = document.querySelector('.login');
var logout = document.querySelector('.logout');
var recipeDetails = document.querySelector('.recipe-details');
var recipeListArea = document.querySelector('.recipe-list-area');
var newRecipeDetails = document.querySelector('.new-recipe-details');
var addNewReceipe = document.querySelector('.add-new-recipe');
var errMsgs = {
  'network-error': 'There was a problem connecting to the network, try again',
  'bad-login': 'name should not be empty,and does not include dog word',
  'not-allowed': 'something went wrong...',
  'unauthorized': "please login with username",
  'missing-name': "item name is missing",
  'empty-title': "please fill the title for the recipe",
  'empty-ingrediants': "please fill the ingrediant for the recipe",
  'empty-instructions': "please fill the instructions for the recipe"
};

function renderRecipeHeading(show) {
  if (show) {
    var html = "\n    <label >Recipe Title</label>\n     ";
    recipeHeading.innerHTML = html;
  } else {
    recipeHeading.innerHTML = '';
  }
}

function renderAuthorHeading(show) {
  if (show) {
    var html = "\n   <label >Author</label>\n   ";
    authorHeading.innerHTML = html;
  } else {
    authorHeading.innerHTML = '';
  }
}

function renderLogin(show) {
  var login = document.querySelector('.login');

  if (show) {
    var html = "\n      <div class = \"login-info\">\n          <label class = \"user-name\">Username:</label><input class = \"user\" name=\"username\" placeholder=\"Enter User name\"/>\n      </div>\n      <button class =\"to-login\" type=\"submit\">Login</button>\n  ";
    login.innerHTML = html;
  } else {
    login.innerHTML = "";
  }
}

function renderaddNewRecipe(show) {
  if (show) {
    var html = "\n        <button class = \"add-recipe\" type=\"submit\">Add New Recipe</button>\n    ";
    addNewReceipe.innerHTML = html;
  } else {
    addNewReceipe.innerHTML = '';
  }
}

function renderLogout() {
  var logout = document.querySelector('.logout');
  var html = "\n    <button class = \"to-logout\" type=\"submit\">Logout</button>\n  ";
  logout.innerHTML = html;
}

function renderStatusMessage(Message) {
  status.innerHTML = Message;
}

function renderPage() {
  if (!appState.isLoggedIn && !appState.isRecipeDetails && !appState.isNewRecipe) {
    renderAuthorHeading(true);
    renderRecipeHeading(true);
    logout.innerHTML = '';
    renderRecipe(appState.recipeList);
    renderLogin(true);
    recipeListArea.append(recipes);
    renderRecipeDetails(appState.recipeDetails, false);
    renderaddNewRecipe(false);
    renderNewRecipeForm(false);
  } else if (appState.isRecipeDetails) {
    renderRecipeDetails(appState.recipeDetails, true);
    renderLogin(false);
    renderaddNewRecipe(false);
    recipeHeading.innerHTML = '';
    authorHeading.innerHTML = '';
    recipeListArea.innerHTML = '';
  } else if (appState.isNewRecipe) {
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
  } else if (appState.isLoggedIn && !appState.isNewRecipe || appState.isLoggedIn && !appState.isRecipeDetails) {
    renderNewRecipeForm(false);
    renderRecipeDetails(appState.recipeDetails, false);
    renderAuthorHeading(true);
    renderRecipeHeading(true);
    renderRecipe(appState.recipeList);
    recipeListArea.append(recipes);
    renderLogout();
    renderLogin(false);
    renderaddNewRecipe(true);
  } else {
    renderLogin(false);
    renderRecipe(appState.recipeList);
    recipeListArea.append(recipes);
    renderNewRecipeForm(false);
    renderRecipeDetails(appState.recipeDetails, false);
    renderaddNewRecipe(false);
  }

  renderStatusMessage(appState.statusMessage);
}

var renderRecipeDetails = function renderRecipeDetails(receipeDetails, show) {
  if (show) {
    var html = "\n    <div class = \"author-name-details\">\n      <label class = \"author-name-title\">Author:</label><span class = \"author-info\">".concat(receipeDetails.author, "</span>\n    </div>\n    <div class = \"recipe-name-details\">\n     <label class = \"recipe-name-title\">Title:</label><span class = \"recipe-info\">").concat(receipeDetails.title, "</span>\n    </div>\n    <div class = \"recipe-ingrediant-details\">\n      <label class = \"ingrediants-title\">Ingrediants:</label><span class = \"ingrediants-info\">").concat(receipeDetails.ingrediants, "</span>\n    </div>\n    <div class = \"recipe-instruction-details\">\n      <label class = \"instructions-title\">Instructions:</label><span class = \"instructions-info\">").concat(receipeDetails.instructions, "</span>\n    </div>\n    <a href=\"\" class=\"return-from-display\">Return To HomePage</a> \n  ");
    recipeDetails.innerHTML = html;
  } else {
    recipeDetails.innerHTML = '';
  }
};

var renderNewRecipeForm = function renderNewRecipeForm(show) {
  if (show) {
    var html = "\n      <div class = \"recipe-name-info\">\n        <label class = \"recipe-name\">Title:</label><input class = \"new-title\" type=\"text\"  placeholder = \"Enter an title\"></input>\n    </div>\n    <div class = \"recipe-ingrediants-info\">\n      <label class = \"ingrediants\">Ingrediants:</label><textarea class = \"new-ingrediant\" type=\"text\"  placeholder = \"Enter a ingrediants\"></textarea>\n    </div>\n    <div class = \"recipe-instructions-info\">\n      <label class = \"instructions\">Instructions:</label><textarea class = \"new-instruction\" type=\"text\"  placeholder = \"Enter an instruction\"></textarea>\n    </div>\n    <div class = \"outgoing\">\n      <button class = \"to-submit\" type=\"submit\">Submit</button>\n    <a href=\"\" class=\"return-from-form\">Return To HomePage</a> \n    </div>\n  ";
    newRecipeDetails.innerHTML = html;
  } else {
    newRecipeDetails.innerHTML = '';
  }
};

var renderRecipe = function renderRecipe(recipeList) {
  recipes.innerHTML = Object.keys(recipeList).map(function (key) {
    var recipe = recipeList[key];
    return "\n      <li class= \"list\">\n      <a data-recipe-id=\"".concat(recipe.recipeId, "\" href=\"\" class=\"recipe-title\" data-tooltip = \"click for recipe Info\">").concat(recipe.title, "</a> \n        <span data-recipe-id=\"").concat(recipe.recipeId, "\" class=\"author-name\">").concat(recipe.author, "</button>\n      </li>\n      ");
  }).join('\n');
};

recipes.addEventListener('click', function (e) {
  if (e.target.classList.contains('recipe-title')) {
    e.preventDefault();
    var id = event.target.dataset.recipeId;
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchRecipeInfo"])(id).then(function (recipe) {
      appState.isRecipeDetails = true;
      appState.statusMessage = '';
      appState.recipeDetails = recipe.recipeInfo;
      renderPage();
    })["catch"](function (err) {
      appState.statusMessage = errMsgs[err.error] || err.error;
      renderStatusMessage(appState.statusMessage);
    });
  }
});
login.addEventListener('click', function (e) {
  if (e.target.classList.contains('to-login')) {
    var username = document.querySelector('.user').value;
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLogIn"])(username).then(function () {
      appState.isLoggedIn = true;
      appState.isRecipeDetails = false;
      appState.isNewRecipe = false;
      appState.statusMessage = '';
      renderPage();
    })["catch"](function (err) {
      if (err.error == 'not-allowed' || err.error == 'unauthorized') {
        appState.isLoggedIn = false;
        appState.isNewRecipe = false;
        appState.isRecipeDetails = false;
        appState.recipeList = err.recipeList;
        appState.statusMessage = errMsgs[err.error] || err.error;
        renderPage();
      } else {
        appState.statusMessage = errMsgs[err.error] || err.error;
        renderStatusMessage(appState.statusMessage);
      }
    });
  }
});
logout.addEventListener('click', function (e) {
  if (e.target.classList.contains('to-logout')) {
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLogout"])().then(function () {
      appState.isLoggedIn = false;
      appState.isNewRecipe = false;
      appState.isRecipeDetails = false;
      appState.statusMessage = '';
      renderPage();
    });
  }
});
recipeDetails.addEventListener('click', function (e) {
  if (e.target.classList.contains('return-from-display')) {
    e.preventDefault();
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchRecipes"])().then(function (recipes) {
      appState.isRecipeDetails = false;
      appState.recipeList = recipes.recipeList;
      appState.statusMessage = '';
      renderPage();
    })["catch"](function (err) {
      if (err.error == 'not-allowed' || err.error == 'unauthorized') {
        appState.isLoggedIn = false;
        appState.isNewRecipe = false;
        appState.isRecipeDetails = false;
        appState.recipeList = err.recipeList;
        renderPage();
      } else {
        appState.statusMessage = errMsgs[err.error] || err.error;
        renderStatusMessage(appState.statusMessage);
      }
    });
  }
});
newRecipeDetails.addEventListener('click', function (e) {
  if (e.target.classList.contains('return-from-form')) {
    e.preventDefault();
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchRecipes"])().then(function (recipes) {
      appState.isNewRecipe = false;
      appState.recipeList = recipes.recipeList;
      appState.statusMessage = '';
      renderPage();
    })["catch"](function (err) {
      if (err.error == 'not-allowed' || err.error == 'unauthorized') {
        appState.isLoggedIn = false;
        appState.isNewRecipe = false;
        appState.isRecipeDetails = false;
        appState.recipeList = err.recipeList;
        appState.statusMessage = errMsgs[err.error] || err.error;
        renderPage();
      } else {
        appState.statusMessage = errMsgs[err.error] || err.error;
        renderStatusMessage(appState.statusMessage);
      }
    });
  }

  if (e.target.classList.contains('to-submit')) {
    var title = document.querySelector('.new-title').value;
    var ingrediants = document.querySelector('.new-ingrediant').value;
    var instructions = document.querySelector('.new-instruction').value;
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchRecipe"])(title, ingrediants, instructions).then(function (response) {
      appState.isNewRecipe = true;
      appState.statusMessage = response.successMessage;
      appState.recipeList = response.recipeList;
      renderPage();
    })["catch"](function (err) {
      if (err.error == 'not-allowed' || err.error == 'unauthorized') {
        appState.isLoggedIn = false;
        appState.isNewRecipe = false;
        appState.isRecipeDetails = false;
        appState.recipeList = err.recipeList;
        appState.statusMessage = errMsgs[err.error] || err.error;
        renderPage();
      } else {
        appState.statusMessage = errMsgs[err.error] || err.error;
        renderStatusMessage(appState.statusMessage);
      }
    });
  }
});
addNewReceipe.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-recipe')) {
    appState.isNewRecipe = true;
    appState.error = '';
    renderPage();
  }
});
Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLoginStatus"])().then(function (recipe) {
  appState.isLoggedIn = true;
  appState.recipeList = recipe.recipeList;
  appState.statusMessage = '';
  renderPage();
})["catch"](function (err) {
  appState.isLoggedIn = false;
  appState.recipeList = err.recipeList;
  renderPage();
});

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! exports provided: fetchLogIn, fetchLoginStatus, fetchLogout, fetchRecipeInfo, fetchRecipe, fetchRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogIn", function() { return fetchLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLoginStatus", function() { return fetchLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogout", function() { return fetchLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipeInfo", function() { return fetchRecipeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipe", function() { return fetchRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipes", function() { return fetchRecipes; });
var fetchLogIn = function fetchLogIn(userName) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      userName: userName
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return;
  });
};
var fetchLoginStatus = function fetchLoginStatus() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      console.log("in here" + response);
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json(response);
  });
};
var fetchLogout = function fetchLogout() {
  return fetch('/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return;
  });
};
var fetchRecipeInfo = function fetchRecipeInfo(recipeId) {
  return fetch("/recipe/".concat(recipeId), {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json(response);
  });
};
var fetchRecipe = function fetchRecipe(title, ingrediants, instructions) {
  return fetch('/recipe', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      title: title,
      ingrediants: ingrediants,
      instructions: instructions
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json(response);
  });
};
var fetchRecipes = function fetchRecipes() {
  return fetch('/recipes', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json(response);
  });
};

/***/ })

/******/ });
//# sourceMappingURL=recipe.js.map