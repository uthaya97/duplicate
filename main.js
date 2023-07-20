var a=[20,40,40,25,25,48,23,89,89];
document.write("a=[20,40,40,25,25,48,23,89,89]"+"<br>"+"<br>");
var b=[];
a.sort();
let temp;
let c=[];
for(let i=0;i<a.length;i++){
	if(a[i]!==temp){
		b.push(a[i]);
		temp=a[i];
	}
	else{
		c.push(a[i]);
	}
}
document.write("original numbers are="+b+"<br>"+"<br>");
console.log(b);
document.write("dublicate numbers are="+c+"<br>"+"<br>");
console.log(c);