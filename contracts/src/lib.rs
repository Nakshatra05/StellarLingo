use soroban_sdk::{contractimpl, symbol_short, Env, Symbol};

pub struct StellarLingoContract;

#[contractimpl]
impl StellarLingoContract {
    pub fn register_user(env: Env, user_id: Symbol) -> bool {
        // Registration logic here
        true
    }
}

#[cfg(test)]
mod test;
