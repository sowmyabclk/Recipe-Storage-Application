    const users = {};
    const recipeList = {};

   function userExists(userName) {
     const record = Object.values(users).find(user => user.userName === userName);
     return record && record.uid;
   }
   
   function addUser(userName,uId) {   
     const oldId = userExists(userName);
     const id = oldId || uId;
     users[id] = { userName, uId: id };
     return id;
   }

   const counter = () =>  {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  };

  const nextId = counter();

  function addRecipe(userName,title,ingrediants,instructions ) {
     const id = nextId();
     recipeList[ id ] = { recipeId: id,author:userName,title:title, ingrediants:ingrediants,instructions:instructions };
  }
   
   const recipes = {
     users,
     recipeList,
     addUser,
     addRecipe
   };
   
   module.exports = recipes;