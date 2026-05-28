# React with Redux Toolkit

A production-ready demonstration of React 19 integrated with modern Redux Toolkit (RTK) and React Redux for centralized state management. This application, powered by Vite, implements structured state slices, dynamic UI conditional rendering, and real-time ledger arithmetic within a responsive interface.

---

## 🛠️ Technology Stack & Dependencies

![React 19](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

---

## 🚀 Key Features

*   **Centralized State Store**: Uses `@reduxjs/toolkit` for configuring a single-source-of-truth store, eliminating boilerplate action types and action creators.
*   **Modular State Slices**: Utilizes `createSlice` to divide state logic into encapsulated domains (Counter and Privacy).
*   **Immer-Powered Safe Mutations**: Reducers utilize RTK's built-in Immer integration to write intuitive, direct state updates while maintaining immutable history.
*   **Dynamic State Subscriptions**: Employs React Redux hooks (`useSelector`) to selectively extract data slices, preventing unnecessary rendering.
*   **Action Dispatch Engine**: Employs the `useDispatch` hook to trigger synchronous state updates in response to user events.
*   **Privacy Shield Protection**: Demonstrates conditional rendering by swapping active data readouts with a privacy lock overlay when toggled.
*   **Referenced Data Streams**: Integrates React's `useRef` hook for extracting user inputs directly without triggering intermediate rendering cycles.
*   **Responsive Framework Layout**: Styled with Bootstrap 5 cards, grid layouts, and standardized utility buttons.

---

## 📐 Centralized Redux Architecture

The data flow within the application follows the strict unidirectional Redux pattern, optimized by Redux Toolkit slices:

```mermaid
stateDiagram-v2
    direction TB
    State: Redux Store
    View: React UI
    Dispatch: Action Dispatcher
    Reducers: Slice Reducers

    State --> View : useSelector
    View --> Dispatch : Click or Input Event
    Dispatch --> Reducers : Dispatch Action
    Reducers --> State : Mutates State via Immer
```

---

## 📂 Repository File Directory

```
React-with-Redux-Toolkit/
├── src/
│   ├── components/            # Presentational & Interactive UI Elements
│   │   ├── Container.jsx      # Card wrapper bounding content layouts
│   │   ├── Controls.jsx       # Dispatch interfaces (Buttons, input forms)
│   │   ├── DisplayCounter.jsx # Subscribes to and outputs the counter state
│   │   ├── Header.jsx         # Primary header presentation
│   │   └── PrivacyMessage.jsx # Fallback component for privacy shield
│   ├── store/                 # State management layer
│   │   ├── counter.js         # Counter slice (Reducers: increment, decrement, add, subtract)
│   │   ├── index.js           # Central store aggregator using configureStore()
│   │   └── privacy.js         # Privacy slice (Reducers: togglePrivacy)
│   ├── App.css                # Custom application styles
│   ├── App.jsx                # Main controller combining layouts & conditional renders
│   └── main.jsx               # Entrypoint mounting React app and Redux Provider
├── index.html                 # Template landing page
├── package.json               # Package config & dependency versions
├── vite.config.js             # Bundler settings
└── eslint.config.js           # Lint rule definitions
```

---

## 📝 State Slice Definitions

### 1. Counter Slice ([store/counter.js](file:///d:/for%20CV/My%20learnings/React-with-Redux-Toolkit/src/store/counter.js))
Tracks numerical values and handles arbitrary mathematical inputs. String inputs are cast to standard numbers before calculations:
```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    add: (state, action) => {
      state.counter += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counter -= Number(action.payload);
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
```

### 2. Privacy Slice ([store/privacy.js](file:///d:/for%20CV/My%20learnings/React-with-Redux-Toolkit/src/store/privacy.js))
Tracks state parameters to dictate view visibility using boolean flags:
```javascript
import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    togglePrivacy: (state) => {
      return !state;
    }
  }
});

export const privacyActions = privacySlice.actions;
export default privacySlice;
```

### 3. Store Configuration ([store/index.js](file:///d:/for%20CV/My%20learnings/React-with-Redux-Toolkit/src/store/index.js))
Combines slices and configures the Redux store:
```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;
```

---

## 💻 UI Interaction Guide

1.  **Increments / Decrements**:
    *   Clicking **`+1`** dispatches `counterActions.increment()` to increase value by 1.
    *   Clicking **`-1`** dispatches `counterActions.decrement()` to decrease value by 1.
2.  **Privacy Lock Toggle**:
    *   Clicking **`Privacy Toggle`** dispatches `privacyActions.togglePrivacy()`.
    *   This switches the `privacy` state boolean, instantly swapping the counter display with the text: `Counter is Private !!!!!`.
3.  **Arbitrary Calculations**:
    *   Type a target integer into the text field.
    *   Click **`Add`** to call `counterActions.add(input_value)` to dynamically add to the store.
    *   Click **`Subtract`** to call `counterActions.subtract(input_value)` to subtract from the store.
    *   The field value is reset immediately after dispatching.

---

## 🚀 Setup & Installation Guidelines

### Prerequisites
Make sure [Node.js](https://nodejs.org/) (version 18.0 or higher) is installed on your local operating system.

### Steps to Run
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Imtiaz-Ali17314/React-with-Redux-Toolkit.git
    cd React-with-Redux-Toolkit
    ```
2.  **Install Application Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    Launch Vite dev server with Hot Module Replacement (HMR):
    ```bash
    npm run dev
    ```
    Access the local application port displayed in the terminal (usually `http://localhost:5173`).
4.  **Produce Production Build**:
    To output optimized static assets inside the `dist` folder:
    ```bash
    npm run build
    ```
5.  **Review Static Bundle**:
    To test the production build locally:
    ```bash
    npm run preview
    ```
