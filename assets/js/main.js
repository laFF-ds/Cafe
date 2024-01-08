fetch("assets/menu.json")
.then(res => res.json())
.then(data => 
{
    //
    const drinksMenu = document.getElementById("menu-title-food")
    const foodMenu = document.getElementById("menu")

    data.drinks.forEach(drink => 
    {
        /*Some items have multiple pricing options so
        the array is mapped for the price options and the price
        */
        let output = 
        `
        <section class="menu-item">
            <img src="assets/images/${drink.image}" alt="${drink.alt}" class="menu-image">
            <div class="menu-info">
                <dt>${drink.item}</dt>
                <dd>${drink.description}</dd>
                <dd>${drink?.priceoptions !== undefined ? drink?.priceoptions.map((options,i)=>[options, '$'+drink.price[i].toFixed(2)].join(" ")).join(" ") : '$'+drink.price[0].toFixed(2)}</dd>
            </div>
        </section>
        `  
        drinksMenu.insertAdjacentHTML("beforebegin", output) 
    })
    
    data.food.forEach(food => 
    {
        /*Some items have multiple pricing options so
        the array is mapped for the price options and the price
        */
        let output = 
        `
        <section class="menu-item">
            <img src="assets/images/${food.image}" alt="${food.alt}" class="menu-image">
            <div class="menu-info">
                <dt>${food.item}</dt>
                <dd>${food.description}</dd>
                <dd>${food?.priceoptions !== undefined ? food?.priceoptions.map((options,i)=>[options, '$'+food.price[i].toFixed(2)].join(" ")).join(" ") : '$'+food.price[0].toFixed(2)}</dd>
            </div>
        </section>
        `  
        foodMenu.insertAdjacentHTML("beforeend", output) 
    })     
})