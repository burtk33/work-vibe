const newProject = async (event) => {
    event.preventDefault();

    const title = document.getElementById('new-title').value.trim();
    const description = document.getElementById('new-description').value.trim();

    if (title && description) {
        const response = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add new project');
        }
    }
};

const deleteProject = async (event) => {
    
    const deleteID=event.target.getAttribute('value');
        const response = await fetch(`/api/projects/${deleteID}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete project');
        }
    }

document
    .querySelector('.create-form')
    .addEventListener('submit', newProject);

document.querySelector('.delete-btn').addEventListener('click', deleteProject);

document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});