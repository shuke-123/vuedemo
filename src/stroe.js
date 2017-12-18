/**
 * Created by shuke on 2017/11/30.
 */
const STORAGE_KEY = "todos-vuejs"
export default {
 fetch (){
     return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
 },
    save(name){
       window.localStorage.setItem(STORAGE_KEY, JSON.stringify(name))
    }
}