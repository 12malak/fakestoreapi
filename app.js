class Product{
    constructor(title,price,description,image){
    this.title=title
    this.price=price
    this.description=description
    this.image=image
    }
    
    
    }
  
  let arrData=[];
  fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=> {
  
                  json.forEach(element => {
                  let  product_ =new Product(element.title, element.price, element.description, element.image)
                  arrData.push(product_)
  
  
                });
                arrData.map(element => {
  
                    let sdcard= document.getElementById("student_card");
                  
                    let divContainer = document.createElement('div');
                  
                    let image = document.createElement("img");
                    image.src=`${element.image}`
                
                  
                    divContainer.style.fontSize = "12px";
                    divContainer.style.height="13rem";
                    // divContainer.style.padding="10rem";
                    divContainer.style.marginBottom="10rem";

                    let h5= document.createElement("h5");
                  
                    h5.textContent=`title: ${element.title}`;
                    
                    let span= document.createElement("span");
                    span.textContent=`price: ${element.price}`;
                    span.style.color="#EA8FEA";
                    span.style.fontSize="17p";
                    let p= document.createElement("p");
                    p.textContent=`description: ${element.description}`;
                    divContainer.appendChild(image);
                    divContainer.appendChild(h5);
                    divContainer.appendChild(span);
                    // div.appendChild(p);
                   
                  
                    // divContainer.appendChild(div);
                    sdcard.appendChild(divContainer);
                  
                  
                  
                  
                  
                  } );
    
    
    
                })    