### Notes on Coding Approach
#### Rubic on Application

##### Main Page
- Shows 3 shelves for books.
  - Each book is shown on the correct shelf, along with its title and author(s).
- Allow users to move books between shelves.
  - Control tied to each book instance.
  - Functionality to move a book to a different shelf.
- When the browser is refreshed, the same information is displayed on the page.

##### Search Page
- Has a search input field.
- Page behaves correctly:
  - As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s). You can use throttle/debounce but are not required to do so.
  - Search results are not shown when all of the text is deleted out of the search input box.
  - Invalid queries are handled and prior search results are not shown.
  - Search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
  - Ability to search for multiple words, such as “artificial intelligence.”
- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
  - If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

##### Routing
- Link to search page from main page and upon click:
  - Goes to search page.
  - URL in browser's address bar is /search.
- Link to main page from search page and upon click:
  - Goes to main page.
  - URL in browser's address bar is /.
  
#### Component Ideas
1. App - get all books via API
2. Main - shows all shelves
3. Books - shows book image and meta data
4. Move - move books to different shelves
5. Search - perform all search functions

Open: Where to manage state?