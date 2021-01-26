var n=0;
var deliting = 0;
var nRow = [];

function addRow(m){
	return`
			<tr class="${m}">
				<td><input type="text" class="field1"></td>
				<td><input type="number" onKeyDown="if(this.value.length==3) return false;" class="field2"></td>
				<td><button class="upButton">&#8593;</button></td>
				<td><button class="downButton">&#8595;</button></td>
				<td><button class="delButton">х</button></td>
			</tr>	
        `
	
}

function addButton(){
	n+=1;
	deliting+=1;
	var m = 'row' + n;
	document.body.querySelector('table').insertAdjacentHTML("beforeend",  this.addRow(m));
	nRow[n] = document.querySelector('.'+m)
	nRow[Number(n)+1]=null;
}

function delButton(delObject){
	
	var i = delObject.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	var j = nRow[n].className;
	j = j.replace(/\D/g,'') - 1;
	var m = n;
	nRow.splice(i, 1);
	document.body.querySelector('table').querySelector('.'+delObject.parentElement.parentElement.className).remove();
	for (m;m>i;m--) {
		nRow[m-1].className = 'row' + j;
		j-=1;	
	}
	n-=1;
}

function downButton(down){
	var i = down.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	j = Number(i)+1;
	if (nRow[j]!=null){
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value = temp;
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value = temp;
	}
}

function upButton(up){
	var i = up.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	j = i - 1;
	if (nRow[j]!=null){
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value = temp;
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value = temp;
	}
}
function saveButton(){
	var saveUpload = [];
	document.body.insertAdjacentHTML("beforeend",  `{`);
	for (i=0;i<=n;i++){
	saveUpload.field1 = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value;
	saveUpload.field2  = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value;
	document.body.insertAdjacentHTML("beforeend",  `"${saveUpload.field1}" : "${saveUpload.field2}"`);
	if (i!=n) document.body.insertAdjacentHTML("beforeend",  ` , `);
	}
	document.body.insertAdjacentHTML("beforeend",  `}`);
}
function listener(){
	nRow[0]=document.querySelector('.row0');
	nRow[-1]=null;
		document.body.addEventListener("click", e => {
                if (e.target.classList.contains("delButton")) {
					this.delButton(e.target);
            }
        });
		document.body.addEventListener("click", e => {
                if (e.target.classList.contains("downButton")) {
					this.downButton(e.target);
            }
        });
		document.body.addEventListener("click", e => {
                if (e.target.classList.contains("upButton")) {
					this.upButton(e.target);
            }
        });
}

document.addEventListener("DOMContentLoaded", () => listener());