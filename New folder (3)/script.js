
// // (1)	Factory function
// // Sabse pahle ek object create karte hai fhir  usko return kar dete hai
// //  camlcase mai likhte hai aur ye aage chhota uske bada fhir chhota
// Factory object
function createReactangle(l,b){

    return   {
        len: l,
        bre: b,
        draw(){
            console.log("Drawing rectangle");
        }
        }
        }
rectangle=createReactangle(5,6) 

// function
function Reactangle(){
    this.len=1; // Har function ka ek object hoga aur har object ka property ka Constructor hoga
    this.bre=2; 

  this.draw = function(){
        console.log("Drawing");
        }
    }
        let rect = new Reactangle();
        rect.color='yello'; // Dynamic Nature of object 
        console.log(rect)
        delete rect.color
        console.log(rect)
        

        // refrence  are copied by their address
       let a={value:10} 
       let b=a;
       a.value++;
       console.log(a.value) 
       console.log(b.value) 
       



// primitve are copied by their value
// let a=10; //
// let b=a;
// a++;
// console.log(a) 
// console.log(b) 

