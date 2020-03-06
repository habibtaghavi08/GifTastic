var buttons=["Bently", "Benz", "BMW", "Porche", "Audi", "Range Rover","Lambo", "Ferrari","GT-R",]
// created a display function and 4 loop
function display(){


    for (let index = 0; index < buttons.length; index++) { 
           var button =  $("<button>") 
           button.text(buttons[index])
           button.addClass("carsBtn ml-1")
           $(".buttonsDiv").append(button)
    }
    //crerated om click for all image buttons

    $(".carsBtn").on("click",function(){

        //grabs current text button clicked on page
        var getTextBtn=$(this).text()
        console.log("http://api.giphy.com/v1/gifs/search?q="+getTextBtn+"&api_key=DNSsuC2Sr861ml9NjnXxNjYmyA8iNUva")
        //AJAX is a way to call API
        $.ajax({
              url:"http://api.giphy.com/v1/gifs/search?q="+getTextBtn+"&api_key=DNSsuC2Sr861ml9NjnXxNjYmyA8iNUva",
             method:"GET"
            }).then(function(data){
                console.log(data)
            // creating a varrible for the rows and colloms dynamiclly using JQuery

            //creating row tag
            var row=$("<row>")

            })
    })
}


// to call the function and means to run the function 

display()