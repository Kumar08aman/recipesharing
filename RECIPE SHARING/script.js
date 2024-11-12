function openRecipe(recipeId) {
    let recipes = {
        'recipe1': {
            title: 'Chana Masala',
            description:' This is the recipe for Dish 2. Ingredients: X, Y, Z. Instructions: A, B, C. ',
            
            
        },
        'recipe2': {
            title: 'Dish 2',
            description: 'This is the recipe for Dish 2. Ingredients: X, Y, Z. Instructions: A, B, C.'
        },
        'recipe3': {
            title: 'Dish 3',
            description: 'This is the recipe for Dish 3. Ingredients: X, Y, Z. Instructions: A, B, C.' ,
            
        }, 'recipe4': {
            title: 'Dish 4',
            description: 'This is the recipe for Dish 4. Ingredients: X, Y, Z. Instructions: A, B, C.' ,
            
        },
        'recipe5': {
            title: 'Dish 5',
            description: 'This is the recipe for Dish 5. Ingredients: X, Y, Z. Instructions: A, B, C.' ,
            
        },

         
       
        
    };
    let recipe = recipes[recipeId];
    if (recipe) {
        window.location.href = 'recipe.html';
        localStorage.setItem('recipeTitle', recipe.title);
        localStorage.setItem('recipeDescription', recipe.description);
       
    }
}

window.onload = function() {
    let title = localStorage.getItem('recipeTitle');
    let description = localStorage.getItem('recipeDescription');
    if (title && description) {
        document.getElementById('recipe-title').textContent = title;
        document.getElementById('recipe-description').textContent = description;
    }
};


