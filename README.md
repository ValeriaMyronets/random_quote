# Random Quote

The project implements a website to reproduce a random quote using a public API ([quotable.io](https://quotable.io)). A web application written in **Vue.js** allows users to receive new quotes without reloading pages.

## Features
After the page loads, you'll see a random quote and the author's name. Click the **New Quote** button to get another quote without reloading the page. In case of an error during the request to the server, a clear message will be displayed.

- Displaying the generated citation history as a list and clearing it.
- Ability to copy a quote to the clipboard in one click.
- Spread the quote via Telegram.
- Ability to copy and share a quote from the story.

## Requirements
- Vue.js: The project is built using Vue.js.
- Toast Library: Used to display error messages and other important notifications.
- Public API for Exchange Rates: The application fetches random quotes from a public API.


## Installation
 **Start the development server:**

   ```bash
   npm run dev
