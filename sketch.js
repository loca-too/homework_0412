let nbarray = [];
let x=0;


function setup() {
  createCanvas(600, 600, WEBGL); 
 
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }
  
  console.log(nbarray);
  
  
}

function draw() {
  
  background(mouseX,20,mouseY);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  
   x=x+0.05
    if(mouseIsPressed){
  fill(mouseX,mouseY,random(255));
  square(mouseX-325,mouseY-325, 55);  
  //noStroke();
    
  } else{
    fill(100,mouseY,mouseX);
    circle(mouseX-300, mouseY-300,20+5*sin(x));
    //noStroke();
  }
  
  

  
  
  
  
  
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    this.cc=color(random(200),random(255),0)
    this.cc2=color(0,50,0)
    this.stela=new stela(this.x,this.y,this.z,this.size*0.35,this.size);
    this.stela2=new stela(this.x,this.y,this.z,this.size*0.25,this.size);
  }
  
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    noStroke();
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.1);
        rotateY(frameCount*0.1);
        this.mx = this.mx+0.5;
        }
      this.stela.display();
      this.stela2.display();
      fill(this.cc)
       cylinder(this.size*1);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
}

class stela{
    constructor(x,y,z,size,cdx){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.cdx=cdx;
    this.cc=color(random(200),random(255),0)
  }
  display(){
    push();
    rotateZ(frameCount*0.1);
    translate(this.cdx,0,0);  
    fill(this.cc);
    sphere(this.size);
    pop();
}
  
  }


class stela2{
    constructor(x,y,z,size,cdx){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.cdx=cdx;
    
  }
  display(){
    push();
    rotateZ(frameCount*0.6);
    translate(this.cdx,0,0);  
    fill(this.cc);
    sphere(this.size);
    pop();
}
  
  }