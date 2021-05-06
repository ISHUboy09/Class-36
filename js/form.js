class Form {

 constructor()
 {

 }


display()
{
    var title = createElement('h2')
    title.html("Car Racing Game")
    title.position(130,0)

   var button = createButton('play')
   button.position(250,200)
   

   var input = createInput("Name")
   input.position(130,160)
   

 button.mousePressed(function(){

 input.hide();
 button.hide();


    var name = input.value();
    var greeting = createElement('h3')
    greeting.html("HELLO " + name)
    greeting.position(130,160)
 })






    
}








    
}