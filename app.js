//  selecting the Element
 
 const button =document.getElementById('Btn')
 const body = document.querySelector('body')
 


 
 button.addEventListener('click' , function(){
      
      const colors =[ 'pink' , 'red', 'blue', 'yellow','green','brown'] 
      const Rnumber = Math.trunc(Math.random()* colors.length)
       console.log(Rnumber)

      body.style.backgroundColor = colors[Rnumber]
})



