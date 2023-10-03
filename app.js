/**
 * We're using ES modules given the "module" attribute in the script
 * tag in index.html that's referencing this file:
 * <script src="app.js" type="module" defer></script>
 */

import Store from './services/Store.js';
import { loadData } from './services/Menu.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
    loadData()
})