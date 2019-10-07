const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.all('/hello', (req, res) =>
  res.json({
    hello: 'world',
    when: new Date().getTime(),
    method: req.method,
    body: req.body,
    query: req.query,
  })
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
