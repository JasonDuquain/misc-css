gsap.registerPlugin("Draggable")
const output = document.querySelector("h2 span")
gsap.set("#dial", {transformOrigin:"50% 50%"})
Draggable.create("#myImage, #dial", {
	type:"rotation",
	onDrag:function() {
		//added parseInt to clean up decimals
		output.textContent = parseInt(gsap.utils.wrap(0, 360, this.rotation))
	}
})