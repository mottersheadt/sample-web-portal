const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configure the formatter to use 2 spaces for indentation. This is optional.
app.set('json spaces', 2);

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});