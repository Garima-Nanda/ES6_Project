const app = new function() {
    this.el = document.getElementById('names');
    this.names = ['Garima', 'Gagan', 'Avleen']; // Using the 'this' keyword 
    this.roll = [1510991205, 1510991204, 1510991138];
    this.stream = ['CSE', 'CSE', 'CSE'];
    this.year = [2019, 2019, 2019];
	// Using Arrow Function to display a new record added to the database
    FetchAll = () => {
        let data = '';
        if (this.names.length > 0) {
            for (i = 0; i < this.names.length; i++) {
                data += `<tr>
				<td>${i+1}</td>
				<td> ${this.roll[i]} </td>
				<td> ${this.names[i]} </td>
				<td> ${this.stream[i]} </td>
				<td> ${this.year[i]}</td>    
                <td><button class="btn btn-primary" onclick="Edit(${i})">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<button class="btn btn-warning" onclick="Delete(${i})">Delete</button></td>
                <td><input type="checkbox" class="ch" id="hello"></td></tr>`
            }
        }
        this.el.innerHTML = data;
    };

  // Using Arrow Function to add a new record added to the database
     Add =  () => {
      el = document.getElementById('add-name');
      el1 = document.getElementById('add-roll');
      el2 = document.getElementById('add-stream');
      el3 = document.getElementById('add-year');

      // Get the values
      let name = el.value;
      let id = el1.value;
      let cstream = el2.value;
      let pyear = el3.value;
      let flag = 0;          // Using the for of loop to check if a duplicate roll number exists in the database
      for(const rol of this.roll)
      {
        if(rol == id){
        flag = 1;
        break;
        }
      }
      if( flag == 1){
        let msg = `Database requires unique roll numbers!`
        alert(msg);
      }
      else{

          // Add the new value
          this.names.push(name.trim());
          this.roll.push(id.trim());
          this.stream.push(cstream.trim());
          this.year.push(pyear.trim());
		  FetchAll();
		  let callback = (feedback) => feedback();
          callback(function(){
              window.alert("Successfully added the record to the database");
          });
          }
		  
		  
          // Reset input values
          el.value = '';
          el1.value = '';
          el2.value = '';
          el3.value = '';
        
  };


	Edit = (item) => {
      el = document.getElementById('edit-name');
      el1 = document.getElementById('edit-roll');
      el2 = document.getElementById('edit-stream');
      el3 = document.getElementById('edit-year');

      // Display value in the field
      el.value = this.names[item];
      el1.value = this.roll[item];
      el2.value = this.stream[item];
      el3.value = this.year[item];

      // Display fields
      document.getElementById('spoiler').style.display = 'block';
      document.getElementById('saveEdit').onsubmit = () =>{

          // Get value
       name = el.value;
       rollno = el1.value;
       cstream = el2.value;
       pyear = el3.value;
       if (name&&rollno&&cstream&&pyear) {

          // Edit value
          this.names.splice(item, 1, name.trim());
          this.roll.splice(item, 1, rollno.trim());
          this.stream.splice(item, 1, cstream.trim());
          this.year.splice(item, 1, pyear.trim());

          // Display the new list
          FetchAll();

          // Hide fields
          CloseInput();
          }
      }
  };
myFunction = () =>{
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
Del = (item) => {
    
      // Delete the current row
      this.names.splice(item, 1);
      this.roll.splice(item, 1);
      this.stream.splice(item, 1);
      this.year.splice(item, 1);
  };  

Delete = (item) => {
      Del(item);
      FetchAll();
  };  

// Hide the field accpeting row for editing
let CloseInput = () => {
    document.getElementById('spoiler').style.display = 'none';
}

// To delete the selected roows all at once
    DeleteMultipleRows = () => {
        let check = document.getElementsByClassName("ch");
        let length = this.names.length;
        let i = 0;
        let j = 0;
        let flag = 0;
        if(length--){
            for(let count of check){                
                if(count.checked){
                  Del(i - j);
                  j++;
                  flag = 1;
                }
                i++;
            }
            if(flag==0)
                alert('Atleast select one row!');            
        }        
FetchAll();
}
FetchAll();
}