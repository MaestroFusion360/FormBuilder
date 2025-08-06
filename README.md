## FormBuilder

**FormBuilder** is a visual HTML form editor built with the Svelte JavaScript framework and Vite bundler. The main goal of the project is to provide developers with a lightweight, convenient tool for full control over form structure and UI, using only modern web technologies without external dependencies.

### ⚙️ Tech Stack

* **Framework:** Svelte
* **Bundler:** Vite
* **Styling:** Pure CSS using CSS variables and media queries
* **Data format:** JSON
* **Additional technologies:** PWA, localStorage, `document.execCommand("copy")` for clipboard support

### 🧩 Structure and Components

The project is implemented as a single-page application (SPA), with the main component `App.svelte` coordinating interaction between the following UI zones:

* **Header:** Displays the application title.
* **Toolbar:** Includes a search input and control buttons (add/delete elements, open/save JSON).
* **Main workspace:**

  * **TreeView:** A recursive component for viewing and editing the HTML structure.
  * **PropertiesPanel:** Edits attributes of the selected element with dynamically generated fields.
  * **CodeView:** Generates and previews valid HTML code.

### ♻️ Reusable Components and UI Kit

FormBuilder uses custom components without third-party libraries:

* **Accordion:** Vertical list presentation component.
* **Hamburger Menu:** Navigation panel in mobile view.
* **Splitter:** Resizable divider component.
* **Switcher:** Generic toggle component.
* Standard input elements (text fields, checkboxes, dropdowns), consistently styled using CSS variables.
* Minimal design token system (colors, fonts, spacing, shadows), organized via global CSS custom properties in `index.css`.

### 📱 Responsiveness and UX

The UI is optimized for both desktop and mobile devices. For screen widths under 768px, a vertical accordion layout is used. On desktop, a two-column layout is used with a dedicated code preview panel. A hamburger menu is provided for mobile navigation, offering access to essential panels and tools in a compact format. Responsive behavior is implemented using both conditional blocks in Svelte components and CSS media queries.

### 🚫 UI Libraries

FormBuilder does not rely on external UI libraries (e.g., Bootstrap, Material UI, Tailwind), keeping it lightweight and fully customizable. However, this also requires more attention to implementation details (accessibility, compatibility, styling).

### 🛠️ Build and Tooling

The project is built with Vite and the Svelte plugin (`@sveltejs/vite-plugin-svelte`). It is written in JavaScript (without strict typing), but the codebase includes infrastructure for a potential future transition to TypeScript.

---

## 📄 License

[MIT](LICENSE.md)

---

**Author:** MaestroFusion360
[GitHub](https://github.com/MaestroFusion360)

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=MaestroFusion360-FormBuilder&label=Project+Views&color=blue" alt="Project Views" />
</p>

