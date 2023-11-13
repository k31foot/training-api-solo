const { setupExpressServer } = require("./server");

const PORT = process.env.PORT || 3000;
//console.log(PORT);
const app = setupExpressServer();
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
