require('dotenv').config({ path: __dirname + '/../.variables.env' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

async function createAdmin() {
  try {
    const Admin = require('../models/erpModels/Admin');
    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash('lerm12345');

    await new Admin({
      email: 'admin@lerm.7erver.com',
      password: passwordHash,
      name: 'Eddie',
      surname: 'Villanueva',
    }).save();
    console.log('👍👍👍👍👍👍👍👍 Admin created : Done!');
    process.exit();
  } catch (e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below');
    console.log(e);
    process.exit();
  }
}
createAdmin();
