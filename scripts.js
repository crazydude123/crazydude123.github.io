document.getElementById('resume-btn').addEventListener('click', function() {
    window.location.href = 'media/resume.pdf';
});

document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', function() {
        let nodeNumber = this.getAttribute('data-node');
        let contentDiv = document.getElementById('node-content-' + nodeNumber);
        
        if (contentDiv) {
            contentDiv.querySelector('.short-text').style.display = 'none';
            contentDiv.querySelector('.full-text').style.display = 'block';
        }
    });
});