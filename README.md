# Flow Demos - Package Management System

This demo showcases a the benefits and simplicity of using Axios + Tanstack QUery for managing API requests in a React application. It also how React Hook Form can be used to handle form state and validation in a type-safe manner with TypeScript. 

## Technologies Used

- [React-Hook-Form](https://react-hook-form.com/) for form state management
- [Tanstack Query](https://tanstack.com/query/latest/) for data fetching and caching
- [Axios](https://axios-http.com/) for HTTP requests
- [MSW](https://mswjs.io/) for mocking API requests (no backend required)

## Overview

The Package Management System is part of a fitness studio management application that allows administrators to create, view, edit, and delete class packages offered to customers. Each package can be configured with various attributes like price, class type, duration, and number of available classes.

## Features

### Package Management

- **View Packages**: Browse all available packages in a sortable and filterable table.
- **Create Packages**: Add new packages with details like name, description, price, and class type.
- **Edit Packages**: Modify existing package details through a modal interface.
- **Delete Packages**: Remove packages that are no longer offered.

### Project Structure

The packages feature follows a modular architecture:

```
src/
  features/
    packages/              # Feature module for packages
      api/
        axios/             # API client implementations
        tanstack/          # React Query hooks
      components/          # UI components specific to packages
      types/               # TypeScript types and interfaces
  pages/
    packages/              # Package-related pages
      EditPackagePage.tsx  # Edit package modal page
      NewPackagePage.tsx   # New package modal page
      PackagesPage.tsx     # Main packages listing page
```

## How to run

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser and navigate to `http://localhost:5173`
5. Navigate to the Packages section to start managing packages

## Usage

- The main Packages page displays a table with all available packages
- Use the "Create New Package" button to add a new package through a modal form
- Click on the edit icon next to a package to modify its details
- Click on the delete icon to remove a package
- Search and sort functionality is available in the packages table
