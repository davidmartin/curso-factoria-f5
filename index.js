const express = require('express');
const { readFile } = require("node:fs/promises");

const app = express();

app.get('/all', async (req, res) => {
    const data = await readFile("data.json", "utf-8");
                    
    const parsedData = JSON.parse(data);
    /**
     * XXX
     */
    console.log(parsedData, typeof parsedData);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(parsedData));
});

app.listen(3000, () => {   
    console.log("Server started on http://localhost:3000");
});