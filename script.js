function burger_info() {

    var ingredients = ["Помидор ", "Майонез ", "Картошка ", "Масло ", "Хлеб ", "Мясо ", "Салат ", "Вода "];   
    var ingredients_calories = [20, 50, 20, 100, 50, 250, 10, 2];

    var burger1_info = document.getElementById("burger1_info");
    var burger2_info = document.getElementById("burger2_info");
    var burger1_info_calories = document.getElementById("burger1_info_calories");
    var burger2_info_calories = document.getElementById("burger2_info_calories");

        for (i = 0; i < 5; i++) {
            var li1 = document.createElement("li1");
            var li2 = document.createElement("li2");
            var random1 = Math.floor(Math.random() * ingredients.length);
            var random2 = Math.floor(Math.random() * ingredients.length);
            var burger1 = ingredients[random1] + ingredients_calories[random1] + "<br>";
            var burger2 = ingredients[random2] + ingredients_calories[random2] + "<br>";
            li1.innerHTML = burger1;
            li2.innerHTML = burger2;
            burger1_info.appendChild(li1);
            burger2_info.appendChild(li2);
        }

}

window.onload = burger_info;

