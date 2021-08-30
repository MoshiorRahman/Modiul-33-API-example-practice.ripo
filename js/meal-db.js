const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)

    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))

}

const displayFood = foods => {
    const searchFood = document.getElementById('search-food');
    searchFood.innerText = '';
    foods.forEach(food => {
        // console.log(food)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadFoodDetail(${food.idMeal})" class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 150)}</p>
            </div>
        </div>
        `;
        searchFood.appendChild(div);


    })
}
const loadFoodDetail = foodId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodDetails(data.meals[0]))
}

const displayFoodDetails = food => {
    console.log(food);
    const foodDetails = document.getElementById('food-details');
    foodDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img class="details-img" src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0, 150)}</p>
            <a href="${food.strYoutube}" class="btn btn-primary">Go Youtube</a>
        </div>
    `;
    foodDetails.appendChild(div);



}