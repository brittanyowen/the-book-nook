# [The Book Nook](https://the-book-nook.netlify.app/)

## Overview

Ever find yourself scrambling to find a book to read for an upcoming trip? Or having a running list in the notes section of your phone of all the books you've yet to get to? Or forgetting the name of that book that your friend keeps recommending you read? Welcome to The Book Nook! Here, signed in users will be able to add books to the ever-growing database of must-reads as well as leave reviews for titles they have read and add tags to help fellow users easily search through the catalog to find their next read. 

### Features
- simple, intuitive design
- Full CRUD for Reviews 
- Full CRUD for Books 
- User authentication 
- Filter and search functions 

### Goals
My goal for this project is to create an intuitive web application that is easy to use through simple and intuitive design. Ability to create, edit, and delete entries will allow the user to make this application their own. I hope to tackle at least one of my post-MVPs in order to make this app even more user friendly. 

### Challenges
The challenges I forsee going into project week include time management in terms of bug fixes, knowing when to ask for help, and hyperfixation on styling. Knowing these obstacles are possible, I want to stick to my time estimates as nest I can to stay on track and have time to work on post MVPs over the weekend/on Monday. 


## MVP
- Guests will be able to view the books and their details and signup for an account
- Users will be able to log in, add a book to the database, edit/delete a book that they have created, view a book's details and reviews from other users, add a reivew to a book listing and edit/delete reviews they have created. 
- Filter book index by tags
- Search book index

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end user interface |
| React Router DOM | Component rendering |
|      Axios       | Library that helps make API calls in React |
| Styled Components| For styling the hamburger menu |
| React Media Hook | In line Media Queries |
|   Ruby on Rails  | Server-side web app framework |
|       jwt        | Ruby implementation of JSON Web Tokens |
|      bcrypt      | Password hashing gem for Ruby |


### Client (Front End)

#### Wireframes

##### [TBN Wireframes on AdobeXD](https://xd.adobe.com/view/72cab5c8-b289-48cb-9de1-84955f3c751f-2799/)


- Home/Books Screen

![Screen Shot 2021-03-31 at 9 01 23 AM](https://user-images.githubusercontent.com/76802866/113157104-36160480-9200-11eb-9d61-1c8a5f1ccc2c.png)


- Book Details Screen

![Screen Shot 2021-03-31 at 9 01 51 AM](https://user-images.githubusercontent.com/76802866/113157224-4fb74c00-9200-11eb-89d3-dbf3c08522dc.png)


- Add/Edit Book Screens

![Screen Shot 2021-03-31 at 9 09 00 AM](https://user-images.githubusercontent.com/76802866/113157784-cfddb180-9200-11eb-9317-5885ae6bcb90.png)


- Log In & Sign Up Screens

![Screen Shot 2021-03-31 at 9 08 41 AM](https://user-images.githubusercontent.com/76802866/113157712-c5231c80-9200-11eb-991e-02efb6ea7b21.png)


- Tablet and Mobile Home Screens

![Screen Shot 2021-03-31 at 8 58 16 AM](https://user-images.githubusercontent.com/76802866/113156917-0a931a00-9200-11eb-8e52-f7a45d8568c4.png)



#### Component Tree

![TBN Component Tree](https://user-images.githubusercontent.com/76802866/113086567-7bf2ae80-91a7-11eb-8d26-affaff3e02a6.png)

#### Component Architecture

``` structure

src
|__ components/
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Search.jsx
      |__ Filter.jsx
      |__ BookCard.jsx
      |__ Reviews.jsx
      |__ ReviewCard.jsx
      |__ ReviewCreate.jsx
|__ containers/
      |__ BooksContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ Login.jsx
      |__ SignUp.jsx
      |__ BookCreate.jsx
      |__ Books.jsx
      |__ BookDetails.jsx
      |__ BookEdit.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ books.js
      |__ reviews.js
      |__ tags.js
|__ App.js
|__ App.css
|__ index.js
|__ index.css

```


#### Time Estimates

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Backend set up: install gems, scaffold, clean up unnecessary routes and methods, add join table |    H     |     3 hrs      |     1 hrs     |
| Test routes and debug |    H     |     2 hrs      |     1 hrs     |
| Authorization |    H     |     3 hrs      |     2 hrs     |
| Set up React App framework and folder structure, install dependencies, delete boilerplate, add CSS reset code to index.css  |    H     |     1 hrs      |     1 hrs     |
| Services folder: build api-config and auth files |    H     |     2 hrs      |     1 hrs     |
| Services folder: build books and reviews |    H     |     2 hrs      |     1 hrs     |
| Layout screen and Nav/Footer components |    H     |     1 hrs      |     1 hrs     |
| Login and SignUp Screens, test with seeded admin user |    H     |     2 hrs      |     1 hrs     |
| Framework for BooksContainer and App.js |    H     |     1 hrs      |     1 hrs     |
| Build Books screen and BookCard to view all books, test with seeded data |    H     |     3 hrs      |     2 hrs     |
| BookDetails screen |    H     |     3 hrs      |     3 hrs     |
| BookCreate/BookEdit screens |    H     |     3 hrs      |     3 hrs     |
| Reviews/ReviewCard components, test with seeded reviews |    H     |     3 hrs      |     2 hrs     |
| Build ReviewCreate form component |    H     |     2 hrs      |     3 hrs     |
| Search component on Books screen |    H     |     3 hrs      |     2 hrs     |
| Filter component using tags table on Books screen |    H     |     3 hrs      |      N/A     |
| CSS |    M     |     3 hrs      |     6 hrs     |
| Media Queries |    H     |     2 hrs      |     3 hrs     |
| Deployment |    H     |     1 hrs      |     1 hrs     |
| POST MVP - like a book  |    L     |     5 hrs      |      hrs     |
| TOTAL               |          |     48 hrs      |     35 hrs     |


### Server (Back End)

#### ERD Model

![TBN ERD Model](https://user-images.githubusercontent.com/76802866/113147513-76708500-91f6-11eb-9186-078cf8065a64.png)


***

## Post-MVP

- users can like a book
- users can rate a book
- user have a favorites "shelf" that they can save books to
- users can create new shelves for books they have read, books they want to read, etc
- links to where you can buy the book or libraries in your area where you can check the book out 
- books recommendations based on what the user has liked or saved 

***

## Code Showcase

``` javascript
    <div className="modal-container" onClick={(e) => handleOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            reviewUpdate(book?.id, params.id, reviewData);
            handleOpen(false);
          }}
        >
          <label>
            Edit Review:
            <textarea
              type="text"
              rows={10}
              cols={78}
              name="content"
              value={content}
              onChange={handleChange}
            />
          </label>
          <div className="modal-buttons">
            <button className="edit">UPDATE</button>
            <button onClick={() => handleOpen(false)}>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
```

## Code Issues & Resolutions

I ran into a few hiccups whens starting to build my front end based off of the data the backend was returning. This was a great learning opportunity for me to understand how the JSON data is being rendered in order to display it on the front end and how to troubleshoot Rails error messages. 
One issue I had was not passing the correct parameters to the server in order for it to process a PUT request. I ended up using my React Components dev tools in conjunction with the Rails error messages to learn that the correct number of parameters were not being sent nor was the data in those parameters correct. I was then able to fix my code to get the desired response back from the server. 
