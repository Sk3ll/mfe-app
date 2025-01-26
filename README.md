# How to Start the Project

To get started with the project, follow these steps:

1. Install the dependencies:
   ```bash
   npm i
   ```
2. Run the following:
   ```bash
   npm run dev
   ```

#

# To create a new app you will need to do the following:

### Step 1: Run the following command in the root directory of the project:

```bash
npm create rsbuild@latest
```

### Step 2: Choose the following options in the prompts:

1. Provide a path to your app in the prompt for the name **IN THE ROOT DIR**:

```bash
◇  Project name or path
apps/newapp
```

2. Select React as the framework:

```bash
◇  Select framework
- [ ] Vanilla
- [x] React
- [ ] Vue 3
- [ ] Vue 2
- [ ] Lit
- [ ] Preact
- [ ] Svelte 5
- [ ] Svelte 4
- [ ] Solid
```

3. Choose Typescript for the lang:

```
◇  Select language
- [x] Typescript
- [ ] Javascript
```

4. Use **SPACE** to select ESLint and Prettier, then press **ENTER** to confirm::

```bash
◇  Select additional tools (Use <space> to select, <enter> to
continue)
 ◻ Add Biome for code linting and formatting
 ◼ Add ESLint for code linting
 ◼ Add Prettier for code formatting
```

### Step 3: Final Steps to Set Up the New App:

1. Rename the file `index.tsx` to `bootstrap.tsx` in app you've created:

```
apps/newapp/src/index.tsx
```

2. Create a new `index.tsx` in the same folder with the following content:

```typescript
import("./bootstrap");
```

3. **_IMPORTANT!_**: Create a dummy component in your app’s `src` folder, such as:

```typescript
newapp - button.tsx;
```

4. Install the required dependencies in your app folder:

```bash
npm add @module-federation/enhanced
npm add @module-federation/rsbuild-plugin --save-dev
```

5. Open the rsbuild.config.ts file in your app folder, clear its contents, and replace it with the following:

```typescript
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "newapp-provider",
      exposes: {
        "./newapp-button": "./src/newapp-button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
  },
});
```

- The name field defines the export name in the federation.
- The exposes object maps your elements to their exposed names, e.g., `newapp-provider/newapp-button`.
- **_Ensure you use an unused port_** to avoid conflicts

### Step 4: Connect the New App to the Main Consumer (Shell):

1. Open the `rsbuild.config.ts` file in the `apps/shell` folder.
2. Locate the `remotes` field in the configuration. Add your app as a remote by providing:

- The name of your app (e.g., newapp-provider).
- The connection string:

```bash
name-of-your-app@url:port/mf-manifest.json
```

- For this example:

```bash
newapp-provider@http://localhost:3001/mf-manifest.json
```

### You're All Set! 🎉

You can now start the project and use your newly created elements in the Shell app. 🚀

