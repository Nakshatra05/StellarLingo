use super::*;
use soroban_sdk::Env;

#[test]
fn test_register_user() {
    let env = Env::default();
    let contract = StellarLingoContract;
    let user_id = symbol_short!("user123");

    assert!(contract.register_user(env.clone(), user_id));
}
