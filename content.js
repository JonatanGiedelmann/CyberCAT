document.addEventListener('mouseover', function(event) {
    let target = event.target;
    if (target.tagName.toLowerCase() === 'a') {
      let url = target.href;
      if (url.startsWith('https://')) {
        showTooltip(target, 'LINK USE SECURE PROTOCOL (HTTPS)');
      } else if (url.startsWith('http://')) {
        showTooltip(target, 'UNSECURE PROTOCOL (HTTP), PROCEED WITH CAUTION!');
      }
    }
  });
  
  function showTooltip(element, text) {
    let tooltip = document.createElement('div');
    tooltip.className = 'https-tooltip';
    tooltip.innerText = text;
    document.body.appendChild(tooltip);
  
    let rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + window.scrollX + 'px';
    tooltip.style.top = rect.bottom + window.scrollY + 'px';
  
    element.addEventListener('mouseout', function() {
      tooltip.remove();
    }, { once: true });
  }
  
  // Add some basic styles for the tooltip
  let style = document.createElement('style');
  style.innerText = `
    .https-tooltip {
      position: absolute;
      background-color: #333;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
      z-index: 1000;
      font-size: 12px;
    }
  `;
  document.head.appendChild(style);
  