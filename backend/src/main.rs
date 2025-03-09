use axum::{
    routing::get,
    Router
};
use dotenvy;

mod models {
    pub mod ingredient;
    pub mod recipe;
}

mod handlers {
    pub mod recipe;
}

// #[dotenvy::load]
#[tokio::main]
async fn main() {
    let app = Router::new().route("/recipes", get(handlers::recipe::list_recipes));
    dotenvy::dotenv().ok();
    let port = std::env::var("PORT").unwrap();
    let address = std::env::var("HOST").unwrap();

    // let address = .get("ADDRESS").expect("ADDRESS not found in .env file");
    let listener = tokio::net::TcpListener::bind(
        format!("{}:{}", address, port)
    ).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}