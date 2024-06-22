const accountId = 144553
let accountEmail = "farhan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 54321 // not allowed

accountEmail = "farry@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
