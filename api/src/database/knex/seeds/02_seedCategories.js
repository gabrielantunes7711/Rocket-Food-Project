exports.seed = function (knex) {
  return knex("categories")
    .del()
    .then(function () {
      return knex("categories").insert([
        {
          name: "Refeições",
        },
        {
          name: "Sobremesas",
        },
        {
          name: "Bebidas",
        },
        {
          name: "Combos",
        },
        {
          name: "Árabe",
        },
        {
          name: "Mexicana",
        },
        {
          name: "Tailandesa",
        },
        {
          name: "Chinesa",
        },
        {
          name: "Promoções",
        },
        {
          name: "Mais Buscadas",
        },
      ]);
    });
};
