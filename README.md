# expresscrud
Full CRUD operation is not done. On going project on update operation.


There is an edit button. That will redirect the user to a new page. Route : http://localhost:3000/update/[id]

successfully made request to http://localhost:3000/update/[id] but put mothod is not working.

//put request for update
app.put('/update/:id',(req, res)=>{
  console.log(req.params.id)
  var updatedInfo = {
    first_name: req.params.first_name,
    last_name: req.params.last_name,
    email: req.params.email
  }
  db.users.findAndModify({
    query: { _id: ObjectId(req.params.id) },
    update: { $set: { updatedInfo } },
    new: true
  }, function (err, doc, lastErrorObject) {
    if(err){
      console.log(err);
    }
    res.redirect('/');
  })
});