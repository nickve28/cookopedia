use axum::{http::StatusCode, Json};

use crate::models::{ingredient::{Ingredient, UnitOfMeasurement}, recipe::Recipe};

#[axum::debug_handler]
pub async fn list_recipes() ->Result<Json<Vec<Recipe>>, StatusCode> {
    let recipes = vec![
        Recipe::new(
            String::from("Marokkaanse Couscous"),
            vec![
                Ingredient::new(String::from("Couscous"), UnitOfMeasurement::Grams, 100.0),
            ],
            vec![
                String::from("Stap 1: Snijd de kipfilet in blokjes en marineer deze met de koriander, komijn, kaneel, kurkuma, gember, paprikapoeder, korianderpoeder, zout en peper."),
            ]
        )
    ];
    Ok(Json(recipes))
}