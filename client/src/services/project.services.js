export async function getAllProjects() {

    const response = await fetch('http://localhost:3000/projects');
    return await response.json();
}