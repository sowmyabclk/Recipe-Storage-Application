const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

const recipes = require('./recipes');
const { v4: uuidv4 } = require('uuid');

app.use(cookieParser());
app.use(express.static('./public'));

app.get('/session', (req, res) => {
  const uniqueId = req.cookies.uid;
  if(!uniqueId) {
    res.status(401).json({recipeList: recipes.recipeList, error: 'unauthorized' });
    return;
  }
  if(!recipes.users[uniqueId]) {
    res.clearCookie('uid');
    res.status(403).json({recipeList: recipes.recipeList, error: 'not-allowed' });
    return;
  }
  return res.json({recipeList: recipes.recipeList});
});

app.post('/session', express.json(), (req, res) => {
    let cleanUserName;
    const userName = req.body.userName;
    if (userName) {
      cleanUserName = userName.replace(/[^A-Za-z0-9_\-]/g, '');
    }
    const uniqueId = req.cookies.uid;

    if (recipes.users[uniqueId]) {
      if (recipes.users[uniqueId].userName != userName) {
        return res.status(403).json({recipeList: recipes.recipeList, error: 'not-allowed' });
      }
    }
    if (!userName || userName.includes("dog") || cleanUserName.length ==0) {
      res.status(400).json({recipeList: recipes.recipeList, error: 'bad-login' });
      return;
    }

    const uId = uuidv4();
    const id = recipes.addUser(userName,uId);
    res.cookie('uid', id);
    return res.sendStatus(200);
  });
    
  app.delete('/session', (req, res) => {
    const uniqueId = req.cookies.uid;
    delete recipes.users[uniqueId]
    res.clearCookie('uid');
    return res.sendStatus(200);
 });

 app.get('/recipe/:recipeId', (req, res) => {
  const recipeId = req.params.recipeId;
  return res.json({recipeInfo :recipes.recipeList[recipeId] });
});

 app.post('/recipe', express.json(), (req, res) => {
  const title = req.body.title;
  const ingrediants = req.body.ingrediants;
  const instructions = req.body.instructions;
  const uniqueId = req.cookies.uid;
  if (title) {
    cleanTitle = title.replace(/[^A-Za-z0-9_\-]/g, '');
  }
  if (ingrediants) {
    cleanIngrediants = ingrediants.replace(/[^A-Za-z0-9_\-]/g, '');
  }
  if (instructions) {
    cleanInstructions = instructions.replace(/[^A-Za-z0-9_\-]/g, '');
  }
  
  if(!uniqueId) {
    res.status(401).send({ recipeList: recipes.recipeList,error: 'unauthorized' });
    return;
  }
  if(!recipes.users[uniqueId]) {
    res.clearCookie('uid');
    res.status(403).send({ recipeList: recipes.recipeList,error: 'not-allowed' });
    return;
  }
 
  if (!title  || cleanTitle.length ==0) {
    res.status(400).json({ error: 'empty-title' });
    return;
  }
  if (!ingrediants  || cleanIngrediants.length ==0) {
    res.status(400).json({ error: 'empty-ingrediants' });
    return;
  }
  if (!instructions  || cleanInstructions.length ==0) {
    res.status(400).json({ error: 'empty-instructions' });
    return;
  }
  recipes.addRecipe( recipes.users[uniqueId].userName,title,ingrediants,instructions );
    res.json({ recipeList: recipes.recipeList,successMessage: 'recipe submitted successfully' });
});

app.get('/recipes', (req, res) => {
  const uniqueId = req.cookies.uid;
  if(!uniqueId) {
    res.status(401).send({recipeList: recipes.recipeList, error: 'unauthorized' });
  return;
 }

  if(!recipes.users[uniqueId] ) {
    res.clearCookie('uid');
    res.status(403).send({ recipeList: recipes.recipeList,error: 'not-allowed' });
    return;
  }
  return res.json({recipeList: recipes.recipeList});
});

 
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );