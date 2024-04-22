var config = {};

// Update to have your correct username and password
config.mongoURI = {
  production:
    "mongodb+srv://felixmakinda:@ILoveJesus1994@darkroom.rr98p0m.mongodb.net/?retryWrites=true&w=majority&appName=darkroom",
  development: "mongodb://localhost:27017/",
  test: "mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority",
};
module.exports = config;
