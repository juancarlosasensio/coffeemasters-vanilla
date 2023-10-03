/**
 * Because we're authoring this in JavaScript, 
 * in order to create a Singleton, we don't need to create 
 * a class AND THEN create an instance of that class.
 * 
 * Are objects wrapped in modules equivalent to class instances?
 * 
 * Is it better to work with modules as objects, functions or classes?
 * Or does it ultimately not matter but what matters most instead is 
 * that we are consistent using one pattern over the other?
 */

const API = {
    url: "/data/menu.json",
    fetchMenu: async () => {
        const response = await fetch(API.url);
        const menu = await response.json();

        return menu;
    }
};

export default API;