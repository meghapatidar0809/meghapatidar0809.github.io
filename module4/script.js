var names=new Array();
names[0]="Yash";
names[1]="Jhope";
names[2]="Taehyung";
names[3]="Namjoon";
names[4]="Suga";
names[5]="Jimin";
names[6]="Lee";
names[7]="Peter";
names[8]="Jungkook";
names[9]="Jin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
