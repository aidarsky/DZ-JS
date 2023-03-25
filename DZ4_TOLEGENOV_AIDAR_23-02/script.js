
document.getElementById('load-data').addEventListener('click', function() {

    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            let blocks = [];


            data.forEach(item => {
                let block = document.createElement('div');
                block.style.width = '150px';
                block.style.height = '200px';
                block.style.border = '1px solid black';
                block.style.display = 'inline-block';
                block.style.marginRight = '20px'
                block.style.marginTop = '20px'

                let image = document.createElement('img');
                image.src = item.img;
                image.style.width = '100%';
                image.style.height = '70%';
                block.appendChild(image);

                let title = document.createElement('div');
                title.textContent = item.title;
                title.style.fontSize = '14px';
                title.style.fontWeight = 'bold';
                block.appendChild(title);

                let description = document.createElement('div');
                description.textContent = item.description;
                description.style.fontSize = '12px';
                block.appendChild(description);

                let price = document.createElement('div');
                price.textContent = item.price;
                price.style.fontSize = '12px';
                block.appendChild(price);


                blocks.push(block);
            });


            let content = document.getElementById('content');
            content.innerHTML = '';
            blocks.forEach(block => {
                content.appendChild(block);
            });
        });
});