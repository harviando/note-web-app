# note-web-app Description and Test Tutorial

A backend web application for handling RESTful API for notes CRUD operations.

## Backend Routes and Features

1. **Home - Server Status**
   - **Route:** `/`
   - **Method:** `GET`
   - **Description:** This route welcomes you with a server status message.

2. **View All Notes**
   - **Route:** `/notes`
   - **Method:** `GET`
   - **Description:** Fetches all the notes created in the application.

3. **Create a New Note**
   - **Route:** `/notes`
   - **Method:** `POST`
   - **Description:** Adds a new note to the application.
   - **Note Format**:
     ```json
     {
         "title": "Your Note Title",
         "tags": ["tag1", "tag2"],
         "body": "The content of your note"
     }
     ```

4. **Get a Note by ID**
   - **Route:** `/notes/{id}`
   - **Method:** `GET`
   - **Description:** Retrieves a specific note using its unique ID.

5. **Edit a Note by ID**
   - **Route:** `/notes/{id}`
   - **Method:** `PUT`
   - **Description:** Modifies an existing note by its unique ID.
   - **Note Format for Editing**:
     ```json
     {
         "title": "Updated Note Title",
         "tags": ["updated", "tags"],
         "body": "Updated content of the note"
     }
     ```

6. **Delete a Note by ID**
   - **Route:** `/notes/{id}`
   - **Method:** `DELETE`
   - **Description:** Removes a specific note by its unique ID.

## Testing Your Backend

Use your preferred web browser or an API testing tool like Postman to test the backend server. Follow the provided steps and use the sample data formats to interact with different backend features.

Explore these functionalities to gain insights into the backend operations of our Note Web Application.



   
Have a nice day~
            -Harvi
