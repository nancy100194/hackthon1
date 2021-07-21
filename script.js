async function search() {
  try{
   const key = document.querySelector(".ser").value;
    fetch(`https://cataas.com/api/cats?tags=${key}`, {
           method: "GET"
       })
       .then(data => data.json())
       .then(users => load(users));
  }
  catch(err){
    console.log(err)
  }
   function load(users) {
       var catlist = document.createElement("div");
       catlist.className = "container"
       catlist.id = "catlist"
       users.forEach((cat) => {
           var records = document.createElement("div");
           records.id = 'cat';
           records.innerHTML = `
           <div class="popup" onclick="randomCat()"><input type="image" class="popup" id="img" src="https://cataas.com/cat/${cat.id}"> <span class="popuptext" id="myPopup"><img src="https://cataas.com/cat/${cat.id}" style="width:150px;height:150px;"></span><div>
           <div>
              <div>Created on:${new Date(cat.created_at).toDateString()}</div>
              <div>Tags:${cat.tags}</div>
           </div>`


           console.log(records);
           catlist.append(records);
       })
       document.body.append(catlist);
   }
   document.querySelector("#catlist").remove();
}

function randomCat() {
   var popup = document.getElementById("myPopup");
   popup.id = "f";
   popup.classList.toggle("show");
}