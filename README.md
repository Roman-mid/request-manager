# Request Manager

A simple full-stack application for managing support requests. Users can create requests, view their details, filter them by status and update their status.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Redux Toolkit
- RTK Query
- React Router
- SCSS

### Backend

- Node.js
- Express
- TypeScript
- Zod
- JSON file storage

## Features

- View a list of support requests.
- Filter requests by status.
- Create new requests with form validation.
- View request details.
- Update request status.
- Handle loading, error and empty states.
- Display a not-found page for non-existing requests.
- Persist requests between server restarts.

## Project Structure

```text
request-manager/
├── client/
│   └── src/
│       ├── app/
│       │   ├── api/
│       │   ├── store/
│       │   └── router.tsx
│       └── features/
│           └── requests/
│               ├── api/
│               ├── components/
│               └── pages/
│
├── server/
│   ├── data/
│   │   └── requests.json
│   └── src/
│       ├── controllers/
│       ├── repositories/
│       ├── routes/
│       ├── services/
│       ├── validators/
│       ├── app.ts
│       └── index.ts
│
└── shared/
    └── types/
        └── request.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install dependencies from the project root:

```bash
npm install
```

### Running the Application

Start the backend:

```bash
npm run dev --workspace=server
```

Start the frontend in a separate terminal:

```bash
npm run dev --workspace=client
```

The frontend is available at:

```text
http://localhost:5173
```

The backend API is available at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint                   | Description           |
| ------ | -------------------------- | --------------------- |
| GET    | `/api/requests`            | Get all requests      |
| GET    | `/api/requests/:id`        | Get a request by ID   |
| POST   | `/api/requests`            | Create a new request  |
| PATCH  | `/api/requests/:id/status` | Update request status |
| GET    | `/api/health`              | Check server health   |

### Request Validation

**Create request**

- `title` is required.
- Title length: 3–100 characters.
- Description is optional.
- Description length: maximum 1000 characters.

**Request statuses**

- `new`
- `in_progress`
- `completed`

Validation is implemented on the backend using Zod. This ensures that invalid data is rejected even when requests are sent directly to the API.

## Architecture and State Management

### Frontend

The application uses Redux Toolkit and RTK Query for server state management.

RTK Query handles:

- Fetching requests.
- Fetching individual request details.
- Creating requests.
- Updating request statuses.
- Loading and error states.
- Cache invalidation and automatic data refetching.

After creating a request or changing its status, relevant cached data is invalidated. This keeps the request list and details up to date without manually reloading the page.

Local component state is used for UI-specific data, such as form inputs and the status filter.

### Backend

The backend follows a simple layered architecture:

- **Routes** — define API endpoints.
- **Controllers** — handle HTTP requests and responses.
- **Services** — contain application logic.
- **Repositories** — handle data access and persistence.
- **Validators** — validate incoming data using Zod.

Shared TypeScript interfaces are located in the `shared` directory and are used by both frontend and backend.

## Data Persistence

Requests are stored in:

```text
server/data/requests.json
```

The backend uses Node.js file system operations to read and write request data.

Data is persisted between server restarts, unlike an in-memory storage solution.

## Testing and Verification

The following scenarios were manually checked during development:

| Scenario                                  | Result |
| ----------------------------------------- | ------ |
| Retrieve all requests                     | Passed |
| Create a valid request                    | Passed |
| Reject an invalid request through the API | Passed |
| Update request status                     | Passed |
| Persist data after server restart         | Passed |
| Frontend production build                 | Passed |
| Backend TypeScript build                  | Passed |

Additional scenarios:

- Filter requests by each status.
- Check direct navigation and browser refresh on all routes.
- Check behaviour when the backend is unavailable.
- Check the 404 response for a non-existing request.
- Check that form input is preserved after a failed submission.
- Check that the submit button is disabled while a request is being submitted.

## AI-Assisted Development

AI tools were used as development assistants during the implementation process.

They helped with:

- Planning the project structure and development stages.
- Understanding TypeScript and React concepts.
- Reviewing component architecture and separation of responsibilities.
- Troubleshooting dependency and build errors.
- Improving error handling and API integration.

Examples of prompts used during development:

1. "How should I organise the frontend architecture? Should data fetching logic be inside the page or the component?"
2. "What is the correct way to handle API errors in React?"
3. "Explain this TypeScript error and help me understand how to fix it."

AI-generated suggestions were reviewed, tested and adapted during development. The implementation and final decisions were checked by the developer.

## Known Limitations

- JSON file storage is suitable for this small assignment but is not intended for concurrent production workloads.
- The application does not include authentication or user-specific permissions.
- Automated test coverage has not been added; verification was performed manually.
- The backend uses a local JSON file rather than a database.

## Development Time

Actual development time: **~7 hours**.

---
