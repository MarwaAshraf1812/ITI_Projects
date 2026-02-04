var cookieStorage = { 
    setItem: function(key, value) {
        let farFuture = new Date();
        farFuture.setFullYear(farFuture.getFullYear() + 1); 
        setCookies(key, value, farFuture);
    },

    getItem: function(key) {
        return getCookie(key);
    },

    removeItem: function(key) {
        deleteCookie(key);
    },

    clear: function() {
        let allCookies = allCookieList();
        
        for (let key in allCookies) {
            deleteCookie(key);
        }
    }
};