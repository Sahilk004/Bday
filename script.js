let moveCount = 0;

    function moveButton() {
      const button = document.getElementById('moveButton');
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;

      if (moveCount < 4) {
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
      } else if (moveCount === 4) {
        // Move button outside the window
        button.style.left = `${window.innerWidth}px`;
      }

      moveCount++;

      if (moveCount >= 5) {
        moveCount = 0;
      }
    }