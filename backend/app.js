"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Create an Express application
const app = express();
// Define a route for GET "/api/liveness"
app.get('/api/liveness', (req, res) => {
    res.status(200).json({ message: 'OK' });
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/api/learning-package', (req, res) => {
    res.send('OK !!!'); //TODO
});
app.post('/api/learning-package', (req, res) => {
    res.send('OK !!!'); //TODO
});
app.put('/api/learning-package', (req, res) => {
    res.send('OK !!!'); //TODO
});
app.get('/api/learning-package/:id', (req, res) => {
    res.send('OK !!!'); //TODO
});
app.delete('/api/learning-package/:id', (req, res) => {
    res.send('OK !!!'); //TODO
});
let learningPackages = [
    { id: 1, title: 'Learn TypeScript' },
    { id: 2, title: 'Learn Angular' },
    { id: 3, title: 'Learn NodeJs' },
    { id: 4, title: 'Learn Express' },
];
app.get('/api/learning-package', (req, res) => {
    res.send(learningPackages);
});
//# sourceMappingURL=app.js.map