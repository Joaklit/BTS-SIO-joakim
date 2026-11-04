function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

    var c = Number(a) + Number(b);
    document.getElementById("resultat").value=c;
}

function soustraction()
{
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;

	var c = Number(a) - Number(b);
	document.getElementById("resultat").value=c;
}

function multiplication()
{
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;

	var c = Number(a) * Number(b);
	document.getElementById("resultat").value=c;
	
}

function division()
{
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	if ( a == 0 || b == 0){
		document.getElementById("resultat").value = Error
	}
	else{
	     c = Number(a) / Number(b) }
	document.getElementById("resultat").value=c;
	
}

function permutation() 
{
    let a = document.getElementById("t1").value;
    let b = document.getElementById("t2").value;

    let temp;

    temp = a;
    a = b;
    b = temp;

    document.getElementById("t1").value = a;
    document.getElementById("t2").value = b;
}

function pair()
{
    var a = document.getElementById("t1").value
	if (a % 2 ==0){
    	document.getElementById("resultat").value = " Paire "
	}
}

function efface()
{
	
    document.getElementById("t1").value ="";
    document.getElementById("t2").value ="";
    document.getElementById("resultat").value ="";
    
}




