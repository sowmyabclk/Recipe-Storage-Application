export const fetchLogIn = (userName) => {
    return fetch('/session', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify({ userName }),
    })
    .catch( () => {
      return Promise.reject({error: 'network-error'});
    })
    .then( (response) => {
      if(!response.ok) {
        return response.json().then( result => Promise.reject(result) );
      }
      return;
    });
  };
  
  export const fetchLoginStatus = () => {
    return fetch('/session', {
      method: 'GET',
    })
    .catch( () => {
      return Promise.reject({error: 'network-error'});
    })
    .then( (response) => {
     if(!response.ok) {
       console.log("in here"+response);
        return response.json().then( result => Promise.reject(result) );
      }
      return response.json(response);
     
    });
  };
  
  export const fetchLogout = () => {
    return fetch('/session', {
      method: 'DELETE',
    })
    .catch( () => {
      return Promise.reject({error: 'network-error'});
    })
    .then( (response) => {
      if(!response.ok) {
        return response.json().then( result => Promise.reject(result) );
      }
      return;
    });
    
  };
  
  export const fetchRecipeInfo = (recipeId) => {
    return fetch(`/recipe/${recipeId}`, {
      method: 'GET',
    })
    .catch( () => {
      return Promise.reject({error: 'network-error'});
    })
    .then( (response) => {
      if(!response.ok) {
        return response.json().then( result => Promise.reject(result) );
      }
      return response.json(response);
    });
  
  };

  export const fetchRecipe = (title,ingrediants,instructions) => {
    return fetch('/recipe', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify({ title,ingrediants,instructions }),
    })
    .catch( () => {
      return Promise.reject({error: 'network-error'});
    })
    .then( (response) => {
      if(!response.ok) {
        return response.json().then( result => Promise.reject(result) );
      }
      return response.json(response);
    });
  };
  export const fetchRecipes = () => {
    return fetch('/recipes', {
      method: 'GET',
      
    })
    .catch( () => {
      return Promise.reject({error: 'network-error'});
    })
    .then( (response) => {
      if(!response.ok) {
        return response.json().then( result => Promise.reject(result) );
      }
      return response.json(response);
    });
  };
 