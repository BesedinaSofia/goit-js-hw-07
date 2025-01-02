function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
   let boxSize = 30; 
  const boxes = [];

    for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
     box.classList.add('box');
     box.style.width = `${boxSize}px`;
     box.style.height = `${boxSize}px`;
     box.style.backgroundColor = getRandomHexColor();
     boxes.push(box);
    boxSize += 10; 
    }
    boxesContainer.append(...boxes);
  }
    
   function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; 
   }

        document.querySelector('[data-create]').addEventListener('click', () => {
            const input = document.querySelector('input');
            const amount = parseInt(input.value, 10);

            if (amount >= 1 && amount <= 100) {
                destroyBoxes(); 
                createBoxes(amount); 
                input.value = ''; 
            } else {
                alert('Please enter a number between 1 and 100');
            }
        });
        
        document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);