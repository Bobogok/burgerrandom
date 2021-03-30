function burger_info() {
    var ingredients = {
        tomato: 20,
        mayo: 50,
        potatoe: 20,
        oil: 100,
        bread: 50,
        meat: 250,
        salat: 10,
        water: 2,
    }

    var keys_ingredients = Object.keys(ingredients);

    function create_food(title) {
        var burger = document.getElementById('burgers');

        var name_h2 = document.createElement('h2');
        name_h2.innerHTML = title;
        burger.appendChild(name_h2);

        var ul = document.createElement('ul');
        burger.appendChild(ul);


        while (true) {
            var all_kkal = 0;
            var random_array = new Array();

            for (var i = 0; i < keys_ingredients.length; i++) {
                var random = Math.floor(Math.random() * keys_ingredients.length);
                random_array.push(random);
                all_kkal += ingredients[keys_ingredients[random]];
            };

            if (all_kkal > 1000) {
                for (var i = 0; i < keys_ingredients.length; i++) {
                    var li = document.createElement('li');
                    li.innerHTML = keys_ingredients[random_array[i]] + ': ' + ingredients[keys_ingredients[random_array[i]]] + 'ккал';
                    ul.appendChild(li);
                };
                break;
            };
        };


        var li_kkal = document.createElement('li');
        li_kkal.innerHTML = 'Всего: ' + all_kkal + 'ккал';
        ul.appendChild(li_kkal);  
    }
    
    create_food('Burger1');
    create_food('Burger2');
    // create_food('Burger3');
    // create_food('Burger4');
}

window.onload = burger_info;

