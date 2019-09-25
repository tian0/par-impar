const express = require('express');
const app = express();

app.get('/', (req, res) => {
    for (i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            res.write(`<p>` + i + `. Soy par</p>`)
        } else {
            res.write(`<p>` + i + `. Soy impar</p>`)
        }
    }
    res.end()
});

app.listen(3000, () => console.log('Listening on port 3000!'));

