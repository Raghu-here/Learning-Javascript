# 🚀 Learning JavaScript  
**A personal sandbox for mastering core JavaScript concepts**  

[![GitHub license](https://img.shields.io/github/license/Raghu-here/Learning-Javascript)](LICENSE)  
[![GitHub last commit](https://img.shields.io/github/last-commit/Raghu-here/Learning-Javascript)](https://github.com/Raghu-here/Learning-Javascript/commits/main)  
[![GitHub issues](https://img.shields.io/github/issues/Raghu-here/Learning-Javascript)](https://github.com/Raghu-here/Learning-Javascript/issues)  

---  

## Overview  

**Learning‑JavaScript** is a collection of small, self‑contained scripts that demonstrate fundamental JavaScript topics such as DOM manipulation, functions, user input, and simple game logic. The repository is intended for:

* **Beginners** who want to see concrete examples of each concept.  
* **Instructors** looking for ready‑made demos.  
* **Anyone** who enjoys tinkering with vanilla JavaScript without any build tooling.

All examples run in the browser (via `index.html`) or directly with Node.js.

---  

## Features  

| File | Topic | Description | Execution |
|------|-------|-------------|-----------|
| `first.js` | Variables & console output | Prints “Hello, World!” and demonstrates basic data types. | `node first.js` |
| `function.js` | Functions & scope | Shows function declarations, arrow functions, and closures. | `node function.js` |
| `DOM.js` | DOM manipulation | Adds, removes, and styles elements on the page. | Open `index.html` → click **DOM Demo** |
| `questions.js` | Prompt & conditional logic | Asks the user a series of yes/no questions and scores the answers. | Open `index.html` → click **Quiz** |
| `usernamegenerate.js` | Random string generation | Generates a random username based on adjectives & nouns. | `node usernamegenerate.js` |
| `guessthenumbergame.js` | Loops & user interaction | Classic “Guess the Number” game with hints and attempt tracking. | Open `index.html` → click **Number Game** |
| `index.html` | UI hub | Simple HTML page that loads the above scripts and provides buttons for interactive demos. | Open in any modern browser |

---  

## Tech Stack  

| Layer | Technology | Reason |
|-------|------------|--------|
| Language | **JavaScript (ES2022)** | Modern syntax, runs everywhere |
| Runtime | **Node.js** (for CLI scripts) & **Browser** (for DOM demos) | No build step required |
| Markup | **HTML5** | Hosts interactive demos |
| Styling | **CSS3 (inline)** | Minimal styling for clarity |
| Tooling | **Git** for version control | Standard for open‑source projects |

---  

## Architecture  

```
Learning-Javascript/
├─ index.html          # UI entry point, loads scripts via <script> tags
├─ DOM.js              # DOM‑related helpers
├─ first.js            # Intro console example
├─ function.js         # Function examples
├─ guessthenumbergame.js # Game logic (browser)
├─ questions.js        # Quiz logic (browser)
└─ usernamegenerate.js # Random username generator (Node)
```

*All files are independent; there is no shared state between them.*  
The `index.html` file simply provides buttons that call the corresponding functions exported from each script.

---  

## Getting Started  

### Prerequisites  

| Tool | Minimum Version |
|------|-----------------|
| **Git** | 2.20+ |
| **Node.js** | 18.x (for running the CLI scripts) |
| **A modern browser** | Chrome / Firefox / Edge / Safari |

### Installation  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Raghu-here/Learning-Javascript.git
cd Learning-Javascript

# 2️⃣ (Optional) Install Node dependencies – none required for the core demos
npm install   # will install an empty package.json if you add future deps
```

### Running the demos  

#### Browser‑based demos  

```bash
# Open the UI page
open index.html   # macOS
# or
xdg-open index.html   # Linux
# or simply double‑click the file in Explorer/Finder
```

Click the buttons to see each script in action.

#### Node‑based demos  

```bash
node first.js
node function.js
node usernamegenerate.js
```

---  

## Usage  

### 1️⃣ `first.js` – Hello World  

```bash
node first.js
# Output:
# Hello, World!
# Number: 42
# Boolean: true
```

### 2️⃣ `function.js` – Function Playground  

```js
// Run with Node
node function.js

/* Expected console output:
add(2, 3) = 5
multiply(4, 5) = 20
square(6) = 36
closure example: 10
*/
```

### 3️⃣ `usernamegenerate.js` – Random Username  

```bash
node usernamegenerate.js
# Example output:
# Your new username: swift-otter-8421
```

### 4️⃣ `guessthenumbergame.js` – Number Guessing Game  

Open `index.html` → click **Number Game**.  
The game will prompt you (via `prompt()`) to guess a number between 1‑100 and will give “Too high/low” hints until you succeed.

### 5️⃣ `questions.js` – Simple Quiz  

Open `index.html` → click **Quiz**.  
Answer the series of yes/no questions; the script tallies your score and displays it in an alert.

### 6️⃣ `DOM.js` – DOM Manipulation Demo  

Open `index.html` → click **DOM Demo**.  
You will see a new `<div>` added, styled, and later removed—all logged to the console.

---  

## Development  

### Setting up a local dev environment  

1. **Clone** the repo (see *Installation*).  
2. **Open** the project in your favorite editor (VS Code, WebStorm, etc.).  
3. **Run** any script with `node <filename>.js` or open `index.html` in a browser.  

### Testing  

No automated tests are included yet. Feel free to add Jest or Mocha tests for each module and submit a PR.

### Code Style  

* Use **ESLint** with the `eslint:recommended` rules (you can add it later).  
* Prefer `const`/`let` over `var`.  
* Use **arrow functions** where appropriate.  
* Keep line length ≤ 100 characters.

### Debugging  

* Browser: Open DevTools → Console to view `console.log` output.  
* Node: Use `node --inspect-brk <file>.js` and Chrome DevTools for step‑through debugging.

---  

## Deployment  

The project is purely educational and does **not** require a deployment pipeline.  
If you want to host the demos online:

1. Push the repository to GitHub.  
2. Enable **GitHub Pages** on the `main` branch (settings → Pages → `/ (root)`).  
3. Access the live demo at `https://Raghu-here.github.io/Learning-Javascript/`.

---  

## API Documentation  

The repository does not expose a public API, but each file exports a small set of functions that can be imported elsewhere.

### `usernamegenerate.js`

```js
/**
 * Generates a random username.
 * @returns {string} e.g. "bright-fox-5273"
 */
function generateUsername() { ... }

module.exports = { generateUsername };
```

### `guessthenumbergame.js`

```js
/**
 * Starts the interactive number‑guessing game.
 * Works only in a browser environment (uses prompt/alert).
 */
function startGame() { ... }

export { startGame };
```

(Other scripts are self‑executing when loaded in the browser or run with Node.)

---  

## Contributing  

Contributions are welcome! Follow these steps:

1. **Fork** the repository.  
2. **Create a branch** for your feature or bug‑fix:  
   ```bash
   git checkout -b feature/awesome-demo
   ```  
3. **Make your changes** – keep the code vanilla (no frameworks).  
4. **Add or update documentation** in `README.md` if you add new demos.  
5. **Commit** with a clear message:  
   ```bash
   git commit -m "feat: add Fibonacci demo"
   ```  
6. **Push** to your fork and open a **Pull Request** against `main`.  

### Pull‑request checklist  

- [ ] Code follows the style guidelines above.  
- [ ] New scripts are referenced in the **Features** table.  
- [ ] README is updated with usage examples.  
- [ ] No linting or runtime errors (`node <file>.js` runs cleanly).  

---  

## Troubleshooting  

| Problem | Solution |
|---------|----------|
| **`node: command not found`** | Install Node.js from https://nodejs.org and ensure it’s on your `PATH`. |
| **Browser shows a blank page** | Open the DevTools console – look for “Failed to load resource” errors. Ensure you opened `index.html` via `file://` or a local server (e.g., `npx serve`). |
| **Prompt dialogs are blocked** | Some browsers block `prompt()` in insecure contexts. Open the page via `http://localhost` or enable pop‑ups for the file. |
| **`module not found` when requiring a file** | All scripts are written in CommonJS (Node) or plain IIFE (browser). Use `node <file>.js` for Node files; do not `require()` browser scripts. |

---  

## Roadmap  

- [ ] Add a **README generator** script that auto‑creates a markdown table from file comments.  
- [ ] Introduce **Jest** unit tests for each function.  
- [ ] Create a **CSS theme** for `index.html` to improve visual appeal.  
- [ ] Publish the demos as an **npm package** (`learning-js-demos`).  

---  

## License & Credits  

**License:** MIT © 2024 Raghu (see [LICENSE](LICENSE)).  

**Author:** Raghu (GitHub: [Raghu-here](https://github.com/Raghu-here))  

**Acknowledgments**  

- The MD template follows the **Open‑Source README Standard**.  
- Inspiration from Mozilla Developer Network (MDN) examples.  

---  

*Happy coding!* 🎉  