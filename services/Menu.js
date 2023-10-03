import API from "./API.js";

export async function loadData() {
    window.app.store.menu = await API.fetchMenu();
}