// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  //por defecto con gluten y sin salsa y con la base y los 3 toppings solo
  $(".btn").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $(".pep, .mushroom, .green-pepper, .sauce, .price ul li").hide();

  $("strong").text("$10");
});

function handleBtn(btnClass, ingredientClass) {
  $(btnClass).click(function() {
    $(this).toggleClass("active");

    $(ingredientClass).toggle();

    updatePrice();
  });
}

handleBtn(".btn-pepperonni", ".pep");
handleBtn(".btn-mushrooms", ".mushroom");
handleBtn(".btn-green-peppers", ".green-pepper");

  $(".btn-sauce").click(function() {
  if($(this).hasClass("active")){
    $(".sauce").hide();
    $(this).removeClass("active");
    $(".price ul li:contains($3 white sauce)").hide();
  } else {
    $(".sauce").show();
    $(this).addClass("active");
    $(".price ul li:contains($3 white sauce)").show();
  }
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $(".price ul li:contains($5 gluten-free crust)").hide();
  } else {
    $(this).addClass("active");
    $(".price ul li:contains($5 gluten-free crust)").show();
  }
  });

function updatePrice() {
  var total = 10;

  $(".price li").hide();

  //iterate over active toppings
  $(".btn.active").toArray().forEach(function(btn, index) {
    var ingredient = $(btn).text().toLowerCase();
    var $listElement = $("li:contains('" + ingredient + "')");

    var ingredientPrice = Number(
      $listElement.text().split(" ")[0].replace("$","")
    );

    total += ingredientPrice;

    $listElement.show();
  });

  $(".price strong").text("$" + total);
}
