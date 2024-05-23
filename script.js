document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function createPartition(parent, direction) {
    const isVertical = direction === "v";
    const newPartition1 = document.createElement("div");
    const newPartition2 = document.createElement("div");
    const color1 = parent.style.backgroundColor;
    const color2 = getRandomColor();

    newPartition1.className = "partition";
    newPartition2.className = "partition";
    newPartition1.style.backgroundColor = color1;
    newPartition2.style.backgroundColor = color2;

    const buttons1 = document.createElement("div");
    buttons1.className = "buttons";
    buttons1.innerHTML = `
            <button class="split-btn" data-direction="v">V</button>
            <button class="split-btn" data-direction="h">H</button>
            <button class="remove-btn">-</button>
        `;
    newPartition1.appendChild(buttons1);

    const buttons2 = document.createElement("div");
    buttons2.className = "buttons";
    buttons2.innerHTML = `
            <button class="split-btn" data-direction="v">V</button>
            <button class="split-btn" data-direction="h">H</button>
            <button class="remove-btn">-</button>
        `;
    newPartition2.appendChild(buttons2);

    parent.innerHTML = "";
    parent.appendChild(newPartition1);
    parent.appendChild(newPartition2);

    if (isVertical) {
      parent.style.flexDirection = "row";
    } else {
      parent.style.flexDirection = "column";
    }

    Split([newPartition1, newPartition2], {
      sizes: [50, 50],
      minSize: 100,
      gutterSize: 0,
      snapOffset: 0,
      cursor: isVertical ? "col-resize" : "row-resize",
      direction: isVertical ? "horizontal" : "vertical",
    });
  }

  function removePartition(partition) {
    const parent = partition.parentNode;
    if (parent.classList.contains("partition")) {
      parent.parentNode.replaceChild(partition, parent);
    }
  }

  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("split-btn")) {
      const direction = event.target.getAttribute("data-direction");
      createPartition(event.target.closest(".partition"), direction);
    }
    if (event.target.classList.contains("remove-btn")) {
      removePartition(event.target.closest(".partition"));
    }
  });

  container.style.backgroundColor = getRandomColor();
});
