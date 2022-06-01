import mongoose from "mongoose";

async function connect() {
  const uri = "mongodb+srv://vagnemovic:testeSenha@cluster0.gvnhp.mongodb.net/?retryWrites=true&w=majority";
  return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

export { connect }