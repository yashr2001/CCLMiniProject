function setimage(){
    var preview = document.getElementById('preview');
    var uploadedimage = document.getElementById('imagetopreview').files[0];
    
    reader = new FileReader();
    
    reader.onload = function(){
        preview.src = reader.result;
    }
    
    if(uploadedimage){
        reader.readAsDataURL(uploadedimage);
    }
}



function update(prop, name,value,suffix){
    document.querySelector('.main-img').style.setProperty(prop,`${name}(${value+suffix})`);
}
function set(name,value,suffix){
    document.querySelector('.main-img').style.setProperty(name,`${value+suffix}`);
}

function myFunction(id) {
  var x = document.getElementById(id);
  divId = ["grayscale-section","blur-section","brightness-section","contrast-section","invert-section",
          "opacity-section","saturate-section","resize-section"];
  for(var i=0; i<divId.length ; i++){
    if(x != document.getElementById(divId[i])){
      document.getElementById(divId[i]).style.display = "none";
    }
  }
  console.log(x.style.display);
  if(x.style.display === "none" || x.style.display === ""){
    x.style.display = "block";
  }
  else{
    x.style.display = "none";
  }
  
}