use serde::{Serialize, Deserialize};
use crate::ingredient::models::Ingredient;

#[derive(Serialize, Deserialize)]
pub struct Recipe {
    title: String,
    ingredients: Vec<Ingredient>,
    instructions: Vec<String>,
}

impl Recipe {
    pub fn new(title: String, ingredients: Vec<Ingredient>, instructions: Vec<String>) -> Self {
        Self {
            title,
            ingredients,
            instructions,
        }
    }
}