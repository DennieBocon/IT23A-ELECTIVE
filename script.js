   const clickableParagraph = document.getElementById('clickable');

    clickableParagraph.onclick = function() {
      clickableParagraph.textContent = "You clicked me! The text has changed.";
      clickableParagraph.style.color = "red";
      clickableParagraph.style.fontWeight = "bold";
    };