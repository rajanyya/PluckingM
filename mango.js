class mango{
	constructor(x,y, diametre)
	{
		var options={
			isStatic:true,
			restitution :0.5,
            friction :1,
			}
	
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(x, y, diametre, options);
		this.diameter=diametre;
		World.add(world, this.body);
	}

	display()
	{	
		push()
		translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.diametre);
		pop();
 }
}