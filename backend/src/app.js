const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', routes.auth);
app.use('/api/users', routes.users);
app.use('/api/communities', routes.communities);
app.use('/api/posts', routes.posts);
app.use('/api/comments', routes.comments);

module.exports = app;
