/*const express=require('express');
const port=process.env.PORT || 5000;//port number
const application=express();//instance of express

application.use(express.json());
application.use(express.urlencoded());
application.use(express.static('server'));



application.get('/in',(req,res)=>{
    res.sendFile(__dirname + '/in.html');

})

application.post('/inPost',(req,res)=>{
    console.log(req.body);
})



application.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)

});*/

const express = require('express');

const app = express();

app.use(express.urlencoded());

app.get('/', function(request, response, next){

	response.send(`
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<div class="container">
			<h1 class="text-center mt-3 mb-3">Submit Form Data in Node.js</h1>
			<div class="card">
				<div class="card-header">Sample Form</div>
				<div class="card-body">
					<form method="POST" action="/">
						<div class="mb-3">
							<label>Company Name</label>
							<input type="text" name="company_name" id="company_name" class="form-control" />
						</div>
						<div class="mb-3">
							<label>Address</label>
							<input type="text" name="address" id="address" class="form-control" />
						</div>
						<div class="mb-3">
		                	<label>Contact Number</label>
		                	<input type="text" name="con_no" id="con_no" class="form-control" />
		                </div>
                        <div class="mb-3">
    <div class="col-75">
    <label for="img">Logo : </label><br><br>
  
  <input type="file" id="img" name="img" accept="image/*">
  </div>
		                <div class="mb-3">
		                	<input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
		                </div>
					</form>
				</div>
			</div>
		</div>
	`);


});

app.post('/', function(request, response, next){

	response.send(request.body);

});

app.listen(2000);