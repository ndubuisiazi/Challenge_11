<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>
    <h1>Express.js Challenge: Note Taker</h1>
    <p>Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
css
Copy code
<h2>User Story</h2>
<p>AS A small business owner</p>
<p>I WANT to be able to write and save notes</p>
<p>SO THAT I can organize my thoughts and keep track of tasks I need to complete</p>

<h2>Acceptance Criteria</h2>
<p>GIVEN a note-taking application</p>
<ul>
    <li>WHEN I open the Note Taker</li>
    <li>THEN I am presented with a landing page with a link to a notes page</li>
    <li>WHEN I click on the link to the notes page</li>
    <li>THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column</li>
    <li>WHEN I enter a new note title and the note’s text</li>
    <li>THEN a Save icon appears in the navigation at the top of the page</li>
    <li>WHEN I click on the Save icon</li>
    <li>THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes</li>
    <li>WHEN I click on an existing note in the list in the left-hand column</li>
    <li>THEN that note appears in the right-hand column</li>
    <li>WHEN I click on the Write icon in the navigation at the top of the page</li>
    <li>THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column</li>
</ul>

<h2>Getting Started</h2>
<p>The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.</p>
<p>The following HTML routes should be created:</p>
<ul>
    <li>GET /notes should return the notes.html file.</li>
    <li>GET * should return the index.html file.</li>
</ul>
<p>The following API routes should be created:</p>
<ul>
    <li>GET /api/notes should read the db.json file and return all saved notes as JSON.</li>
    <li>POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).</li>
</ul>
