// When the page loads...
$(document).ready(function() {

  window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
  
    e.returnValue = confirmationMessage;     // Gecko and Trident
    return confirmationMessage;              // Gecko and WebKit
  });

  document.getElementById("submitted").addEventListener("click", function (event) {
   
    event.preventDefault()

    function validation() {
        var name = document.getElementById("yourName").value;
        var mcPick1 = document.getElementById("mcPick-1").value;
        var mcPick2 = document.getElementById("mcPick-2").value;
        var mcPick3 = document.getElementById("mcPick-3").value;
        var mcPick4 = document.getElementById("mcPick-4").value;
        console.log(name, mcPick1);
  
        if (name === '' || mcPick1 === '' || mcPick2 === '' || mcPick3 === '' || mcPick4 === '') {
            alert("Please fill out all fields, or this entry will not be counted");
            return false;
  
        }
        else if (
            name === mcPick1 || name === mcPick2 || name === mcPick3 || name === mcPick4 ||
            mcPick1 === mcPick2 || mcPick1 === mcPick3 || mcPick1 === mcPick4 ||
            mcPick2 === mcPick3 || mcPick2 === mcPick4 || mcPick3 === mcPick4
        ) {
            alert("Please no duplicate choices, or this entry will not be counted");
        } else {
            return true;
        }
    }
  
    function mcPicker() {
        var name = document.getElementById("yourName").value;
        var mcPick1 = document.getElementById("mcPick-1").value;
        var mcPick2 = document.getElementById("mcPick-2").value;
        var mcPick3 = document.getElementById("mcPick-3").value;
        var mcPick4 = document.getElementById("mcPick-4").value;
        if (validation()) {
            var student = {name: name, yes: [mcPick1, mcPick2, mcPick3, mcPick4], selected: 0 }
            // var student = "{ name: "+name+", yes: ["+mcPick1+", "+mcPick2+", "+mcPick3+", "+mcPick4+"], selected: 0 }"
            console.log(student);
            
            // Send the object to a post Ajax request to add it to MySQL
            $.ajax("/api/posts/", {
              type: "POST",
              data: student
              // Send them back to the index page to see their beautiful new post.
            }).then(function() {
              alert("Submitted entry for: "+name)
            });
        } else {
            event.preventDefault()
        }
    }
    mcPicker();
  });

  
});


