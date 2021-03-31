# The Book Nook

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
|   Ruby on Rails  | Server-side web app framework |
|       jwt        | Ruby implementation of JSON Web Tokens |
|      bcrypt      | Password hashing gem for Ruby |


### Client (Front End)

#### Wireframes

##### [TBN Wireframes on AdobeXD](https://xd.adobe.com/view/72cab5c8-b289-48cb-9de1-84955f3c751f-2799/?fullscreen)


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

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend set up: install gems, scaffold, clean up unnecessary routes and methods, add join table |    H     |     3 hrs      |      hrs     |     hrs    |
| Test routes and debug |    H     |     2 hrs      |      hrs     |     TBD     |
| Authorization |    H     |     3 hrs      |      hrs     |     TBD     |
| Set up React App framework and folder structure, install dependencies, delete boilerplate, add CSS reset code to index.css  |    H     |     1 hrs      |      hrs     |     TBD     |
| Services folder: build api-config and auth files |    H     |     2 hrs      |      hrs     |     TBD     |
| Services folder: build books, reviews, and tags |    H     |     2 hrs      |      hrs     |     TBD     |
| Layout screen and Nav/Footer components |    H     |     1 hrs      |      hrs     |     TBD     |
| Login and SignUp Screens, test with seeded admin user |    H     |     2 hrs      |      hrs     |     TBD     |
| Framework for BooksContainer and App.js |    H     |     1 hrs      |      hrs     |     TBD     |
| Build Books screen and BookCard to view all books, test with seeded data |    H     |     3 hrs      |      hrs     |     TBD     |
| BookDetails screen |    H     |     3 hrs      |      hrs     |     TBD     |
| BookCreate/BookEdit screens |    H     |     3 hrs      |      hrs     |     TBD     |
| Reviews/ReviewCard components, test with seeded reviews |    H     |     3 hrs      |      hrs     |     TBD     |
| Build ReviewCreate form component |    H     |     2 hrs      |      hrs     |     TBD     |
| Search component on Books screen |    H     |     3 hrs      |      hrs     |     TBD     |
| Filter component using tags table on Books screen |    H     |     3 hrs      |      hrs     |     TBD     |
| CSS |    M     |     3 hrs      |      hrs     |     TBD     |
| Media Queries |    H     |     2 hrs      |      hrs     |     TBD     |
| POST MVP - like a book  |    L     |     5 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     47 hrs      |      hrs     |     TBD     |


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

N/A

## Code Issues & Resolutions

N/A
