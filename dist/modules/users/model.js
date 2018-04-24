'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  fullName: String,
  avatar: String,
  providerData: {
    uid: String,
    provider: String
  }
}, { timestamps: true });

// Checks if user with same email logged in via fb and then tries to login via gmail. we sync thse
// and return the same user, instead of creating a new one based on email and fullname
UserSchema.statics.findOrCreate = async function (args) {
  try {
    const user = await this.findOne({
      email: args.email,
      fullName: args.fullName
    });

    if (!user) {
      return await this.create(args);
    }

    return user;
  } catch (e) {
    return e;
  }
};

exports.default = _mongoose2.default.model('Users', UserSchema);