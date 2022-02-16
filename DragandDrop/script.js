const listItems = document.querySelectorAll('.list-item')
const boxes = document.querySelectorAll('.box')

let draggedItem = null

for(let i=0; i<listItems.length ;i++){
    const item = listItems[i]
    item.addEventListener("dragstart",function(e){
        draggedItem = item
        e.dataTransfer.setData("text",e.target.id)    
    })

    item.addEventListener("dragend",function(e){
        e.preventDefault();
    })
    for(let j=0;j<boxes.length;j++){
        const box = boxes[j];
        box.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        box.addEventListener('dragenter',function(e){
            e.preventDefault();
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		box.addEventListener('dragleave', function (e) {
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		box.addEventListener('drop', function (e) {
			console.log('drop');
			box.append(draggedItem);
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
    }
}