# SeoMonorepo


# 🧱 SEO Monorepo – Fullstack Application (Nx + Next.js + Node.js)

This is a modular, fullstack monorepo project built using Nx to efficiently manage both frontend and backend applications. The project follows a scalable, maintainable architecture with shared libraries for UI components, services, types, and utilities across the entire stack.

---

## 📚 Tech Stack

| Layer       | Stack                          |
|-------------|--------------------------------|
| Monorepo    | Nx                             |
| Frontend    | Next.js 15 (App Router)        |
| Backend     | Node.js + Express              |
| UI          | MUI v5 + Custom Theme          |
| Shared Libs | TypeScript (strict typing)     |

---

.
├── apps/
│   ├── web/               # Frontend - Next.js 15 with App Router
│   └── api/               # Backend - Node.js (Express)
│
├── libs/
│   ├── ui-components/     # Shared MUI theme & component system
│   ├── services/          # API layer (frontend/backend)
│   ├── types/             # Shared TypeScript interfaces & enums
│   └── utils/             # Shared utilities (e.g. date, formatting, validation)
│
├── tools/                 # Nx custom generators and executors
├── nx.json                # Nx workspace configuration
├── package.json           # Root dependencies
└── tsconfig.base.json     # Shared TypeScript config



---

## 🎯 Key Features

### ✅ Monorepo via Nx

- Unified repo for both frontend and backend.
- Leverages Nx’s powerful caching, task orchestration, and dependency graph.
- Supports custom code generators and consistent tooling.

---

### 🌐 Frontend: Next.js 15 (App Router)

- Uses App Router architecture with modern routing and layouts.
- Full SSR/SSG support for SEO optimization.
- Component system powered by `libs/ui-components` with MUI v5 and custom theme setup.

---

### 🛠️ Backend: Node.js (Express)

- Follows a modular controller-service structure.
- Integrated with shared types from `libs/types` for request/response typing.
- API utility layer in `libs/services` reused across both apps.

---

## 🧩 Shared Libraries

### 🔷 libs/ui-components

- MUI-based shared component system.
- Centralized theme (typography, palette, shadows, breakpoints).
- Built-in responsive font scaling via `responsiveFontSizes`.
- Components follow design consistency and reusability.

### 🔷 libs/services

- Contains all API logic and reusable service functions.
- Handles both client and server side API communication.
- Includes fetch clients, axios base instances, interceptors, etc.

### 🔷 libs/types

- Centralized TypeScript definitions.
- Includes all interfaces, enums, DTOs, and constants.
- Enables strong typing across apps and avoids duplication.

### 🔷 libs/utils

- Shared utility functions (date handling, validation, formatters).
- Available in both frontend and backend for consistency.
- Promotes DRY principle and centralized logic reuse.

---

## 🔧 Dev & Build Tools

- **Nx CLI** for consistent development and build experience.
- **TypeScript** with `strict: true` enabled for safety and predictability.
- **ESLint** and **Prettier** configured for code quality and formatting.
- **MUI Theming** wrapped with `CssBaseline` and custom global styles.

---

## 🧱 Shared Libraries

| Folder             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `libs/types`       | Shared TypeScript interfaces and types across backend and frontend          |
| `libs/services`    | Centralized service handlers for APIs, usually consumed in frontend apps    |
| `libs/utils`       | Common utilities (date formatting, validation, etc.) used across the stack  |
| `libs/ui-components`| UI components using **MUI**, wrapped with app-wide theme and design tokens |

---

## 🎨 MUI Theme Setup

The project uses a centralized custom MUI theme:

- `palette.ts` - color scheme
- `typography.ts` - font settings
- `shadows.ts` - elevation levels
- `breakpoints.ts` - responsive design points
- `components.ts` - MUI component-level overrides


```bash

## ⚙️ Nx Workspace Scripts (Important Commands)

This project uses powerful Nx CLI commands to manage build, dev, test, and lint operations. Below are the most important scripts:

### 🧪 Development

| Command        | Description                                          |
|----------------|------------------------------------------------------|
| `yarn dev`     | Run both frontend (`web`) and backend (`server`) apps in parallel |
| `yarn dev:web` | Start the frontend (Next.js app)                     |
| `yarn dev:server` | Start the backend (Node.js + Express)             |
| `yarn dev:nginx`  | Start the NGINX (reverse proxy or mock layer)     |

---

### 🔨 Build

| Command           | Description                              |
|-------------------|------------------------------------------|
| `yarn build`      | Build all projects (apps + libs)         |
| `yarn build:web`  | Build the Next.js frontend               |
| `yarn build:server` | Build the Node.js backend              |
| `yarn build:utils`  | Build the utility library               |
| `yarn build:types`  | Build the shared type definitions       |
| `yarn build:nginx`  | Build nginx-related assets (if any)     |

---

### 👀 Watch Mode

| Command              | Description                                 |
|----------------------|---------------------------------------------|
| `yarn watch:build`   | Watch and rebuild frontend + backend        |
| `yarn watch:web`     | Watch and rebuild only the frontend         |
| `yarn watch:server`  | Watch and rebuild only the backend          |

---

### ✅ Lint & Format

| Command            | Description                                  |
|--------------------|----------------------------------------------|
| `yarn lint`        | Lint all projects                            |
| `yarn lint:web`    | Lint the frontend app                        |
| `yarn lint:server` | Lint the backend app                         |
| `yarn format`      | Format codebase using Prettier rules         |
| `yarn format:check`| Check formatting without applying changes    |

---

### 🧪 Testing

| Command            | Description                                  |
|--------------------|----------------------------------------------|
| `yarn test`        | Run all tests                                |
| `yarn test:web`    | Run frontend tests                           |
| `yarn test:server` | Run backend tests                            |
| `yarn test:types`  | Run tests on shared types                    |
| `yarn test:utils`  | Run tests on utilities                       |

---

### 📦 Affected Projects (CI/CD / PR Optimization)

| Command                 | Description                                        |
|--------------------------|----------------------------------------------------|
| `yarn affected:build`    | Build only affected projects based on Git changes |
| `yarn affected:test`     | Test only affected projects                       |
| `yarn affected:lint`     | Lint only affected projects                       |
| `yarn affected:graph`    | Visual dependency graph for affected projects     |

---

### 🔁 Misc

| Command        | Description                                       |
|----------------|---------------------------------------------------|
| `yarn graph`   | Visual dependency graph for entire workspace      |
| `yarn dep-graph` | Same as above, alternative naming               |
| `yarn ci`      | Run all CI steps (format check, lint, test, build)|
| `yarn ci:affected` | CI for only affected projects                 |
| `yarn clean`   | Clean `dist` and reinstall node_modules           |
| `yarn reset`   | Reset Nx's internal state                         |

---

## 💡 Tip:
All commands are run from the root directory using `yarn <command>` or `npm run <command>`.









<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your remote caching setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/VADQELbhFW)


## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To install a new plugin you can use the `nx add` command. Here's an example of adding the React plugin:
```sh
npx nx add @nx/react
```

Use the plugin's generator to create new projects. For example, to create a new React app or library:

```sh
# Generate an app
npx nx g @nx/react:app demo

# Generate a library
npx nx g @nx/react:lib some-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


