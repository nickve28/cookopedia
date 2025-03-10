use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
#[serde(tag = "type")]
pub enum UnitOfMeasurement {
    Grams,
    Milliliters,
    Teaspoon,
    Tablespoon,
    Cup,
    Pinch,
    Dash,
    Piece,
}

#[derive(Serialize, Deserialize)]
pub struct Ingredient {
    name: String,
    amount: f32,
    unit_of_measurement: UnitOfMeasurement,
}

impl Ingredient {
    pub fn new(name: String, unit_of_measurement: UnitOfMeasurement, amount: f32) -> Ingredient {
        Ingredient {
            name,
            unit_of_measurement,
            amount
        }
    }
}
