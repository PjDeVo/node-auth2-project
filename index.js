const app = require("./api/server.js");
const cookieParser = require("cookie-parser");
app.use(cookieParser);
require("dotenv").config();

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
