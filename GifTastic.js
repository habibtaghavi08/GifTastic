var buttons = ["Bently", "Benz", "BMW", "Porche", "Audi", "Range Rover", "Lambo", "Ferrari", "GT-R", "Toyota Supra",
"Mclaren", "Rolls Royce", "Lexus LC 500", "Lexus GS-F",
"Lexus RC-F", "Acura NSX", "Maybach", "Ford GT", "McLaren 720S",
"Ferrari 488", "Noble M600", "Spyker C8", "Lamborghini Aventador",
"Mercades AMG GT", "Tesla"]

// created a display function and 4 loop
function display() {


    $(".buttonsDiv").empty()
    for (let index = 0; index < buttons.length; index++) {
        var button = $("<button>")
        button.text(buttons[index])
        button.addClass("carsBtn ml-1")
        $(".buttonsDiv").append(button)
    }
    //crerated om click for all image buttons

  

    $(".carsBtn").on("click", function () {

        //grabs current text button clicked on page
        var getTextBtn = $(this).text()
        console.log(getTextBtn)
   
        //AJAX is a way to call API
        $.ajax({
            url:"https://api.giphy.com/v1/gifs/search?q=" + getTextBtn + "&api_key=DNSsuC2Sr861ml9NjnXxNjYmyA8iNUva&limit=10&offset=0&rating=G&lang=en",
                // url:"https://api.giphy.com/v1/gifs/search?q=" + getTextBtn + "&api_key=DNSsuC2Sr861ml9NjnXxNjYmyA8iNUva&q=q&limit=10&offset=0&rating=G&lang=en",
            // url: "https://api.giphy.com/v1/gifs/search?q=" + getTextBtn + "&api_key=DNSsuC2Sr861ml9NjnXxNjYmyA8iNUva&q=cars&limit=10&offset=0&rating=G&lang=en",
            // url: "https://api.giphy.com/v1/gifs/search?q=" + getTextBtn + "&api_key=DNSsuC2Sr861ml9NjnXxNjYmyA8iNUva",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            // creating a varrible for the rows and colloms dynamiclly using JQuery

            var images = response.data
            /// empties out the place holder of the pictures
            $(".imagesDiv").empty()
            var row = $("<row>")
            //creating new row tag at index zero
            for (let index = 0; index < images.length; index++) {
                //creating row when index is multipul of 3 
                console.log(index % 3)
                if (index % 3 === 0) {
                    var row = $("<row>")
                }

                var col = $("<col-sm-3>")
                 
                var img = $("<img>")
                img.attr("src", images[index].images.original_still.url)
                img.attr("style", "width:25%")
               img.attr("data-state","still")
               img.attr("data-still",images[index].images.original_still.url)
               img.attr("data-animate",images[index].images.original.url)
               img.addClass("imageButton")
                col.append(img)
               
                col.append("rating:"+ images[index].rating)
                row.append(col)

                if (index % 3 === 0) {
                    $(".imagesDiv").append(row)
                }

            }

            $(".imageButton").on("click",function(){
                  var state=$(this).attr("data-state")
                 var animate=$(this).attr("data-animate")
                 var still=$(this).attr("data-still")
                  if(state==="still"){
                      $(this).attr("data-state","animate")

                      $(this).attr("src",animate)
                  }
                  else{
                      $(this).attr("data-state","still")
                      $(this).attr("src",still)
                  }

            
            })

        })
    })
}



$("#addCars").on("click",function(){
    var newCar=$("#cars").val()
    buttons.push(newCar)
    display()
})


// to call the function and means to run the function 

display()