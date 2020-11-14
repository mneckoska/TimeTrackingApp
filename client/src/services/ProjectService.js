export const get = (url) => {
  return fetch(url).then((response) => response.json());
};

export const addProject = (url, project) => {
  return fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },    
    body: JSON.stringify(project)
  }).then((response) => response.json());
};

export const updateProject = (url, project) => {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
    }).then((response) => response.json());
};

export const deleteProject = (url) => {
  return fetch(url, {
    method: "DELETE"   
  }).then((res) => (
    res.json())
  );
};

export const addTime = (url, time) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },    
    body: JSON.stringify(time)
  }).then((response) => response.json());
};

export const deleteTimeById = (url) => {  
  return fetch(url, {
    method: "DELETE"
  }).then(response => response.json());
}