//ES5
//module.exports = {...}

export default {
    get(k) {
        try {
            var val = localStorage.getItem(k);
            return JSON.parse(val);
        } catch (e) {
            console.log(e);
            return null;
        }
    },
    set(k,v) {
        localStorage.setItem(k,JSON.stringify(v));
    }
}
