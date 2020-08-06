
const imgpreview = document.getElementById('img-preview');

const imagenUploader =  document.getElementById('imagen');


   
imagenUploader.addEventListener('change', (e)=>{
   let reader = new FileReader();

   reader.readAsDataURL(e.target.files[0]);

   reader.onload = function(){
       imgpreview.src = reader.result;

   }
})