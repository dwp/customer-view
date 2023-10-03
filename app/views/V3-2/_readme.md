In Version 3 onwards all variables headers are self contained in the folder



1. common/_globals.html

You will find your variables to use throughout the design if you copy the folder V[number] you can update the version in this globals file to update throughout all navigations.


2. common/routes.js

You will find all the routes within V[number] in this file. To add a new route for a new version go to server.js and add:

var V3-1Routes = require('./app/views/V3-1/common/routes');
app.use('/V3-1', V3-1Routes);

You will be required to change V3-1 to whatever version you have.