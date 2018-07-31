var simplecache = { store: {} };

/*
function to add object to cache, key is string, value can be string, number,object
or array and expire will be in seconds  
*/
simplecache.set = function(key, value, expire) {
    simplecache.store[key] = value;
    setTimeout(function(){
        if(key in simplecache.store)
            delete simplecache.store[key];
    }, expire*1000);
}

/* 
function to retrieve objects from cache
 parameter key should be a string or defaultValue can a string, number, object or array
 if key is not in cache or is expired then defaultValue will be returned if provided
 else null will be returned
 */
simplecache.get = function(key, defaultValue=null) {
    if(key in simplecache.store)
        return simplecache.store[key]
    return defaultValue;
}

module.exports = simplecache;