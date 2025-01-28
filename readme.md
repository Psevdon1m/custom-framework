# TypeScript Web Framework

This project is an implementation of a lightweight web framework created as part of Stephen Grider's Udemy TypeScript course. It demonstrates core concepts of popular frameworks like Backbone.js and Marionette.js by building a simplified version with TypeScript.

## Project Overview

The framework implements a Model-View architecture with type safety and demonstrates:

- Custom event handling system
- REST API integration
- Collection handling
- Reusable view classes
- Model-View binding

## Architecture

### Models

- `Model`: Base class for handling data, events, and API sync
- `User`: Example implementation of a Model with custom methods
- `Collection`: Handles collections of models with event support
- `Attributes`: Manages model attributes with type safety
- `ApiSync`: Handles REST API operations
- `Eventing`: Custom event system implementation

### Views

- `View`: Abstract base class for all views
- `CollectionView`: Handles rendering of model collections
- `UserEdit`: Composite view combining UserForm and UserData
- `UserForm`: Handles user input and model updates
- `UserData`: Displays user information
- `UserList`: Renders collection of users

## Dependencies

- TypeScript
- Axios (HTTP client)
- Parcel (Bundler)
- JSON Server (Mock backend)

## Setup and Running

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the mock backend (JSON Server):

   ```bash
   npm run start:db
   ```

3. Start the frontend development server:
   ```bash
   npm run start:parcel
   ```

The application will be available at `http://localhost:1234`
The JSON Server will run at `http://localhost:3000`

## API Endpoints

The mock backend provides the following endpoint:

- `GET/POST/PUT http://localhost:3000/users` - User operations

## Project Structure

src/
├── models/
│ ├── Model.ts # Base model class
│ ├── User.ts # User model implementation
│ ├── Collection.ts # Collection handling
│ ├── ApiSync.ts # API operations
│ ├── Attributes.ts # Model attributes
│ └── Eventing.ts # Event system
├── views/
│ ├── View.ts # Base view class
│ ├── UserEdit.ts # User edit view
│ ├── UserForm.ts # User form handling
│ ├── UserData.ts # User data display
│ ├── UserList.ts # User list view
│ └── CollectionView.ts # Collection view base
├── index.ts # Entry point

## Key Features

- **Type Safety**: Leverages TypeScript's type system for better development experience
- **Composition Over Inheritance**: Uses composition patterns for flexible code structure
- **Event System**: Custom implementation of an event system for model-view communication
- **Reusable Components**: Abstract classes that can be extended for different use cases
- **REST Integration**: Built-in API sync capabilities

## Development Notes

- The framework uses a composition-based approach for maximum flexibility
- Models implement get/set patterns with type safety
- Views automatically re-render on model changes
- Collection views handle lists of models with automatic updates
- The event system allows for loose coupling between components

## Learning Outcomes

This project demonstrates:

- Advanced TypeScript features
- Web framework architecture principles
- Event-driven programming
- REST API integration
- Composition patterns in TypeScript
