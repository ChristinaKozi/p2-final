# Phase 2 Final

## Introduction

This repository contains a website that generates random music genres and holds a list of songs the user can add to practice whichever song they like in the genre that has been generated for them.

## Installation

This prject utilizes a JSON file and you must run the below command in your terminal for the website to have access to the data in the JSON file.

```json-server --watch db.json```

# db.json Data Structure

```
{
  "songs": [
    {
      "title": "I Will Always Love You",
      "artist": "Whitney Houston",
      "lyrics": "[Verse 1]\nIf I should stay\nI ... I'll always love you",
      "id": 1
    },
  ]
}
```

## Pages

The website routes through three pages. "Home" being the initial load that holds the welcome message, "About" which holds the explanation and purpose of the website, as well as "Songs" which holds most of the functionality. 

In the "Songs" page, the genre generator is placed at the top, accompanied with a button which provides a new genre when clicked, until a desired genre is reached. Below that we have a Search bar which filters through the songs in the songlist rendered on the page. Each song listing is accompanied with a toggle button allowing the use to view or hide the lyrics. At the very bottom of the page is form allowing the user to add more songs to the song list.
