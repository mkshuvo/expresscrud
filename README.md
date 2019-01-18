# expresscrud
Full CRUD operation is not done. On going project on update operation.


There is an edit button. That will redirect the user to a new page. Route : http://localhost:3000/update/[id]

Then in the line no. 121 there is a get request for this update page to get the document querying through the [id] in the url parameter. But I am not getting any value from this.

Error: 
TypeError: D:\Dropbox\homeProjects\expressbrad\views\update.ejs:7
    5|         <div class="form-group">

    6|             <label for="first_name">First Name</label>

 >> 7|             <input type="text" class="form-control" id="first_name" name="first_name" value="<%= users.first_name %>" aria-describedby="emailHelp" placeholder="First Name">

    8|         </div>

    9|         <div class="form-group">

    10|             <label for="last_name">Last Name</label>


Cannot read property 'first_name' of null
    at eval (eval at compile (D:\Dropbox\homeProjects\expressbrad\node_modules\ejs\lib\ejs.js:618:12), <anonymous>:22:32)
    at returnedFn (D:\Dropbox\homeProjects\expressbrad\node_modules\ejs\lib\ejs.js:653:17)
    at tryHandleCache (D:\Dropbox\homeProjects\expressbrad\node_modules\ejs\lib\ejs.js:251:36)
    at View.exports.renderFile [as engine] (D:\Dropbox\homeProjects\expressbrad\node_modules\ejs\lib\ejs.js:482:10)
    at View.render (D:\Dropbox\homeProjects\expressbrad\node_modules\express\lib\view.js:135:8)
    at tryRender (D:\Dropbox\homeProjects\expressbrad\node_modules\express\lib\application.js:640:10)
    at Function.render (D:\Dropbox\homeProjects\expressbrad\node_modules\express\lib\application.js:592:3)
    at ServerResponse.render (D:\Dropbox\homeProjects\expressbrad\node_modules\express\lib\response.js:1008:7)
    at D:\Dropbox\homeProjects\expressbrad\app.js:126:9
    at D:\Dropbox\homeProjects\expressbrad\node_modules\mongojs\lib\collection.js:50:5