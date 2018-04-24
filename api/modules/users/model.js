import mongoose, { Schema } from 'mongoose';


const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    fullName: String,
    avatar: String,
    providerData: {
      uid: String,
      provider: String,
    },
  },
  { timestamps: true },
);

// Checks if user with same email logged in via fb and then tries to login via gmail. we sync thse
// and return the same user, instead of creating a new one based on email and fullname
UserSchema.statics.findOrCreate = async function (args) {
  try {
    const user = await this.findOne({
      email: args.email,
      fullName: args.fullName,
    });

    if (!user) {
      return await this.create(args);
    }

    return user;
  } catch (e) {
    return e;
  }
};

export default mongoose.model('Users', UserSchema);