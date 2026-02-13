const bcrypt = require("bcrypt")
async function wax() {
   const Hashbad =  await bcrypt.hash("Shucayb@UOH33",10)
   console.log(Hashbad)
}
wax()