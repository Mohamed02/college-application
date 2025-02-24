# College Application Portal

This is a college application portal where students can apply for courses. The application supports multi-step form submission, has a chatbot, allows users to toggle dark mode, and includes a tutorial section (currently under development).

## Features
1. **Multi-Step Form Application Submission**: Students can submit their applications through a multi-step form.
2. **Chatbot**: A chatbot is integrated to assist students in the application process.
3. **Dark Mode**: Users can switch between light and dark modes.
4. **Tutorial Section**: Under Development

## Tech Stack and Libraries Used
- **React**: Used for creating UI components.
- **Tailwind CSS**: For styling the application.
- **Material UI**: UI component library used for building the interface.
- **React Hook Form & Yup**: For form handling and validation.
- **Vite**: Build tool used to bundle and optimize the app.
- **Socket.io**: Used for real-time communication in the chatbot.
- **Express**: Backend API server to handle requests from the front end.

## How to Start the Application

### 1. Clone or Download the Repository
You can either clone the repository using Git or download the ZIP file.

To clone, run the following command:

# College Application Portal

This is a college application portal where students can apply for courses. The application supports multi-step form submission, has a chatbot, allows users to toggle dark mode, and includes a tutorial section (currently under development).

## Features
1. **Multi-Step Form Application Submission**: Students can submit their applications through a multi-step form.
2. **Chatbot**: A chatbot is integrated to assist students in the application process.
3. **Dark Mode**: Users can switch between light and dark modes.
4. **Tutorial Section**: A tutorial section is under development to guide students through the application process.

## Tech Stack and Libraries Used
- **React**: Used for creating UI components.
- **Tailwind CSS**: For styling the application.
- **Material UI**: UI component library used for building the interface.
- **React Hook Form & Yup**: For form handling and validation.
- **Vite**: Build tool used to bundle and optimize the app.
- **Socket.io**: Used for real-time communication in the chatbot.
- **Express**: Backend API server to handle requests from the front end.

## How to Start the Application

### 1. Clone or Download the Repository
You can either clone the repository using Git or download the ZIP file.



To clone, run the following command:
  git clone <repository_url>


### 2. Setup Frontend
- Navigate to the `frontend` folder:
- Install dependencies:
  npm install
- Start the development server:
  npm run dev


### 3. Setup Backend
- Navigate to the `backend` folder:
  cd backend
- Install dependencies:
  npm install
- Start the backend server:
  npm run start


Once both servers are running, the frontend will be available at `http://localhost:5173/` and the backend will run on `http://localhost:5000`.



# Components Documentation

# Layout Component

## Description
The `Layout` component is a wrapper that provides the overall structure for the application, including a navigation header, theme control, and chat functionality. It manages the state for the dark mode theme and chat window visibility. The component integrates with Material-UI for styling and theming.

## Props
This component does not accept any props.

## State
- `isChatOpen` (boolean): Determines if the chat window is open or closed.
- `darkMode` (boolean): Toggles between light and dark mode.

## Functions
- `toggleChatWindow`: Toggles the visibility of the chat window.
- `toggleDarkMode`: Toggles the dark 


# MultiForm Component

## Description
The `MultiForm` component is a multi-step form used to gather student details. It includes various sections like "Personal", "Academic", "Course", and "Review". The form handles validation, progress tracking, form submission, and saving form data to local storage as a draft.

## Props
This component does not accept any props directly.

## State
- `showAlertBox` (boolean): Determines whether the alert box is visible.
- `alertMessage` (string): The message to display in the alert box.
- `formData` (CombinedFormDataType): Stores the data for the form, which is updated as the user progresses through the form.
  
## Functions
- **displayAlert(message: string)**: Displays the alert box with the provided message.
- **handleAlertClose()**: Closes the alert box.
- **saveDraft()**: Saves the current form data as a draft in `localStorage`.
- **handleChange(e: ChangeEvent<HTMLInputElement> | SelectChangeEvent)**: Updates the form data state when a user interacts with an input field.
- **processFormSubmission(data: CombinedFormDataType)**: Submits the form data to the server via an HTTP `POST` request. Displays success or failure messages based on the server's response.
- **validateAndGoNext()**: Validates the current step and moves to the next step if valid.

## Use of `useForm`
- The form is managed using React Hook Form, which handles form validation, data binding, and submission.
- **`yupResolver`** is used to integrate Yup schema validation (`combinedDataSchema`) with React Hook Form.

## Steps and Progress
The multi-step form is divided into 4 main steps:
1. **Personal**
2. **Academic**
3. **Course**
4. **Review**

The active step is tracked by the `activeStep` state, and the progress is controlled by the `handleNext`, `handleBack`, and `handleComplete` functions from the custom `useStep` hook. The `StepsIndicator` component is used to visually represent the progress.

## Internal Components
- **StepsIndicator**
  - Displays the progress of the form steps, highlighting the active step.
- **FormContent**
  - Renders the input fields and validation errors for each step in the form.
- **StepsController**
  - Controls the navigation between steps, providing "Next" and "Back" buttons, as well as the "Save Draft" option.
- **AlertBox**
  - A component that displays messages to the user, such as success or failure notifications.
  
## Effects
- **useEffect**: On mount, the component checks if there are any drafted form details in `localStorage`. If data is found, it populates the form with the saved details and updates the form values accordingly.

## Example

```jsx
import MultiForm from './components/MultiForm';

const App = () => {
  return (
    <div>
      <MultiForm />
    </div>
  );
} 
```

# AlertBox Component

## Description
The `AlertBox` component is a reusable notification system built using Material-UI's `Snackbar` and `Alert` components. It displays a brief message to the user and automatically hides after 3 seconds. It is used to provide feedback or status updates, such as success, error, or informational messages.

## Props
- **showAlertBox** (`boolean`): Controls the visibility of the alert box. When `true`, the alert box is visible.
- **handleAlertClose** (`function`): A callback function that is triggered when the alert box is closed (either automatically after the duration or manually by the user).
- **message** (`string`): The message content that will be displayed inside the alert box.

## Internal Components
- **Snackbar**: A Material-UI component that displays a notification at the top of the screen. It provides an auto-hide feature.
- **Alert**: A Material-UI component that is used to display a message inside the Snackbar. It is customizable with different severity levels (e.g., success, error, info).

## Usage

```jsx
import AlertBox from './AlertBox';

const ExampleComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("This is an alert!");

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={() => setShowAlert(true)}>Show Alert</button>
      <AlertBox
        showAlertBox={showAlert}
        handleAlertClose={handleAlertClose}
        message={alertMessage}
      />
    </div>
  );
};
```

# ChatWidget Component

## Description
The `ChatWidget` component is a floating button that appears fixed at the bottom-right of the screen. It contains a chat icon and an avatar, and when clicked, it triggers a callback function passed via the `onClick` prop. It is typically used to initiate a chat interaction (e.g., opening a chat window or widget).

## Props
- **onClick** (`function`): A callback function that is triggered when the user clicks on the widget. This function is expected to handle the logic for opening or interacting with the chat window.

## Internal Components
- **IconButton**: A Material-UI button component that wraps the avatar and the chat icon. It handles user interactions, such as the click event.
- **Avatar**: A Material-UI component that displays a circular avatar, in this case, containing the chat icon.
- **ChatIcon**: A Material-UI icon that represents a chat, typically used to visually indicate the purpose of the button.

## Usage

```jsx
import ChatWidget from './ChatWidget';

const App = () => {
  const handleChatClick = () => {
    // Logic to open the chat window or widget
    console.log('Chat widget clicked!');
  };

  return (
    <div>
      <ChatWidget onClick={handleChatClick} />
    </div>
  );
};
```

# AlertBox Component

## Description
The `AlertBox` component displays an informational message to the user in a Material-UI `Snackbar` that auto-hides after a specified duration. It uses the `Alert` component from Material-UI to show messages like success, error, or info in a styled box.

## Props
- **showAlertBox** (`boolean`): A boolean value that controls whether the alert box is visible or not.
- **handleAlertClose** (`function`): A callback function that is triggered when the alert box is closed.
- **message** (`string`): The message to be displayed inside the alert box.

## Internal Components
- **Snackbar**: A Material-UI component that wraps the `Alert` and controls its visibility. It provides features like auto-hide and positioning.
- **Alert**: A Material-UI component used to display the message, and it can be customized to have different severity types (e.g., info, error, success).

## Usage

```jsx
import React, { useState } from 'react';
import AlertBox from './AlertBox';

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={() => setShowAlert(true)}>Show Alert</button>

      <AlertBox
        showAlertBox={showAlert}
        handleAlertClose={handleAlertClose}
        message="This is an informational alert!"
      />
    </div>
  );
};
```

# NavHeader Component

## Description
The `NavHeader` component is a navigation header that contains the app's main menu, a dark mode toggle switch, and an account icon button. It features a `DrawerMenu` that can be opened and closed via a menu button. It also includes a dark mode toggle switch that allows users to switch between light and dark themes.

## Props
- **toggleDarkMode** (`function`): A callback function that handles the toggling of dark mode when the switch is interacted with. It receives an event object from the `Switch` component.
- **darkMode** (`boolean`): A boolean value that represents the current state of dark mode. It is used to control whether dark mode is enabled or not.

## Internal Components
- **AppBar**: A Material-UI component that serves as the container for the navigation header.
- **Toolbar**: A Material-UI component used to arrange and align the header contents.
- **MenuIcon**: A Material-UI icon button that triggers the opening of the navigation drawer when clicked.
- **DrawerMenu**: A custom component used to render a slide-in menu (drawer) when the menu button is clicked.
- **Typography**: A Material-UI component that displays the app's name or title (`ITI` in this case).
- **Switch**: A Material-UI component used to toggle between dark mode and light mode.
- **IconButton**: A Material-UI component that wraps the account icon and allows the user to interact with their account settings.

## Usage

```jsx
import React, { useState } from "react";
import NavHeader from "./NavHeader";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  return (
    <div>
      <NavHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Other content of the application */}
    </div>
  );
};

export default App;
```
## Contributing
Feel free to fork the repository and submit issues or pull requests for improvements or bug fixes.

