# Clock

A simple web-based clock built using **HTML**, **CSS**, and **TypeScript**. The project uses Parcel as the bundler for development and production builds.

![Screenshot of a the clock app during development.](./readme_images/clock.png)

## Features

- This is just a clock phase with the second, minute and hour hands.
- It re-adjusts to the current time of user's browser.
- It automatically increments to show correct time, **All three arms adjust angle**

## Technologies Used

- HTML: Structure of the application.
- CSS: Styling the app layout.
- TypeScript: Logic for handling angle change with change in time.
- Parcel: Bundler for building and serving the app in development.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from here.

### Installation

1. Clone the repository.

   ```bash
   git clone https://github.com/opaque-maniac/clock.git
   ```

2. Navigate to the project directory.
   ```bash
   cd clock
   ```
3. Install dependencies.
   ```bash
   npm install
   ```

### Running the app in development

To run the calculator in development mode with live reloading, use the following command:

```bash
npm run start
```

The app will run on [localhost](http://localhost:1234)

### Building the app for production

To buld the app and transpile the typescript for production, use the following command:

```bash
npm run start
```

The build code will be in the **dist** folder.

## Project Structure

```
clock/
│
├── dist/                # Compiled production files (generated after build)
│
├── src/                 # Source code
│   ├── scripts/         # TypeScript logic
│   │   └── index.ts     # Main TypeScript file
│   ├── styles/          # CSS files
│   │   └── styles.css   # Main CSS file
│   └── index.html       # Main HTML file
│
├── package.json         # Project configuration and dependencies
├── tsconfig.json        # TypeScript configuration
├── .gitignore           # Git ignore file
└── README.md            # Project README file
```
