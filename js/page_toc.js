(function(window, document) {
    setTimeout(function() {
    const toc = document.getElementById('toc');
    const selector = document.querySelector('.entry-text'); // Target selector for processing
    if (!toc || !selector) {
    return;
    }
    const list = document.createElement('ul');
    list.className = 'toc-container';
    toc.appendChild(list);
    
    const headings = selector.querySelectorAll('h2, h3, h4'); // Target heading tags
    const order = [];
    const stack = [{level: 1, element: list}];
    
    // Preprocessing
    headings.forEach((heading) => {
    const level = parseInt(heading.tagName.substring(1));
    order.push(level);
    });
    
    headings.forEach((heading, i) => {
    const level = parseInt(heading.tagName.substring(1));
    const next = order[i + 1];
    const li = document.createElement('li');
    const a = document.createElement('a');
    const id = 'toc-' + (i + 1);
    const ul = document.createElement('ul');
    
    // Generate table of contents elements
    a.textContent = heading.textContent;
    a.href = `#${id}`;
    li.appendChild(a);
    if (level < next) {
    li.appendChild(ul);
    }
    
    // Generate link destination
    heading.id = id;
    
    // Build hierarchical structure
    let parent;
    do {
    parent = stack.pop();
    } while (parent.level >= level);
    parent.element.appendChild(li);
    stack.push(parent);
    stack.push({level: level, element: ul});
    });
    }, 300); // 0.3 seconds delay
    }(window, document));