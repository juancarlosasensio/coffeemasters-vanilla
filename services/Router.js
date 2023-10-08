const Router = {
    init: () => {
        const spaNavRoutes = document.querySelectorAll('[data-spa-navigation*="route"]')
        console.log('links that trigger client-side navigation', spaNavRoutes)

        if (spaNavRoutes) {
            const handleSPARouting = (evt) => {
                evt.preventDefault();
                
                const evtTarget = evt.target;
                const isRoute = evtTarget.hasAttribute('data-spa-navigation')

                if (isRoute) {
                    const url = evtTarget.getAttribute('href'); 
                    Router.go(url)
                }
            }
            spaNavRoutes.forEach(spaNavRoute => spaNavRoute.addEventListener('click', handleSPARouting))
        }

        window.addEventListener('popstate', (evt) => {
            // We read / from the 'state' object that we passed to the
            // history.pushState() call.

            // We also pass false to to our go() call because we don't want to
            // add a route when pressing the back button.
            Router.go(evt.state.route, false)
        })

        /** 
         * Check the initial URL. 
         * Why? In case a person's first interaction with our 
         * Single Page Application is not at the '/' url but say in the '/cart' or '/order' page,
         * in which case we don't want to load the '/' index page but '/cart' or '/order'      
         * */
        Router.go(location.pathname);
    },

    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            /** pushState takes several arguments, one of which is an options object
             * In that object, we could pass the scroll position, for example, so that
             * our router 'remembers' where I user was on the page! 💜
             */
            history.pushState({ route }, '', route);
        }

        let pageElement = null;

        switch (route) {
            case '/':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Menu';
                break;
            case '/order':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Your Order';
                break;
            default:
                if (route.startsWith('/product/')) {
                    pageElement = document.createElement('h1');
                    pageElement.textContent = 'Details';
                    const paramId = route.substring(route.lastIndexOf('/') + 1);
                    pageElement.dataset.id = paramId;
                }
                break;
        }
        if (pageElement) {
            // Reset <main> to be empty
            document.querySelector('main').innerHTML = '';
            // Set new page content in <main>
            document.querySelector('main').appendChild(pageElement)
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
};

export default Router;