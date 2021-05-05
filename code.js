var images = [];
var moves = 0;
var xrt = "white";
newGame();
var hehe = ["yellow", "green", "white", "black", "brown", "red", "blue", "purple", "grey", "orange", "gold", "silver", "pink", "navy"];
autocomplete(document.getElementById("myInput"), hehe);
// get images, place them in an array & randomize the order
function newGame() {
  images = [];
  moves = 0;
for (var i = 0; i < 8; i++) { 
  if (i == 0) {
    var img = 'https://www.expresscopy.com/blog/wp-content/uploads/2012/08/Sunflower_small.jpg';
  } 
  if (i == 1) {
    var img = 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0';
  }
  if (i == 2) {
    var img = 'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d';
  } 
  if (i == 3) {
    var img = 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg';
  } 
  if (i == 4) {
    var img = 'https://www.seriouseats.com/2019/06/20190614-yogurt-vicky-wasik-8-1500x1125.jpg';
  } 
  if (i == 5) {
    var img = 'https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg';
  } 
  if (i == 6) {
    var img = 'https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png';
  } 
  if (i == 7) {
    var img = 'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg';
  } 
  images.push(img);
  images.push(img);
}
randomizeImages();

// output images then hide them
var output = "<ol>"; 
for (var i = 0; i < 16; i++) { 
  output += "<li>";
  output += "<img src = '" + images[i] + "' class='lol' />";
  output += "</li>";
}
output += "</ol>";
document.getElementById("container").innerHTML = output;
$("img").hide();

var guess1 = "";
var guess2 = "";
var count = 0;
$("li").click(function() {
  if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {
    
    // increment guess count, show image, mark it as face up
    count++;
    $(this).children("img").show();
    $(this).children("img").addClass("face-up");
    
    //guess #1
    if (count === 1 ) { 
      guess1 = $(this).children("img").attr("src"); 
    }   
    
    //guess #2
    else { 
      guess2 = $(this).children("img").attr("src"); 
      moves++;
      document.getElementById('moves').innerHTML = "Moves: " + moves;
      // since it's the 2nd guess check for match
      if (guess1 === guess2) { 
        $("li").children("img[src='" + guess2 + "']").addClass("match");
      } 
      
      // else it's a miss
      else { 
        setTimeout(function() {
          $("img").not(".match").hide();
          $("img").not(".match").removeClass("face-up");
        }, 1000);
      }
      
      // reset
      count = 0; 
      setTimeout(function() { console.clear(); }, 60000);      
    }
  }
});
};
// randomize array of images
function randomizeImages(){
  Array.prototype.randomize = function()
  {
    var i = this.length, j, temp;
    while ( --i )
    {
      j = Math.floor( Math.random() * (i - 1) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };
  
  images.randomize();
}
$('#myToggle').change(function(){
  if(this.checked) {
    document.body.classList = 'dark';
    document.getElementById("btn1").style.color = "white";
    document.getElementById("btn1").style.backgroundColor = "black";
    document.getElementById("myInput").style.color = "white";
    document.getElementById("myInput").style.backgroundColor = "black";

  }
  if(!this.checked) {
    document.body.classList = 'light';
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("myInput").style.color = "black";
    document.getElementById("myInput").style.backgroundColor = "white";
  }
});
btn1.onclick = function(){
  moves = 0;
  document.getElementById('moves').innerHTML = "Moves: " + moves;
  newGame();
};

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              xrt = inp.value;
              console.log(xrt);
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
