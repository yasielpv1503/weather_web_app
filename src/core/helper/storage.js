

const keys = {
    auth: 'sdfsf877328947c2384sdfs/*23r2ec*dasdasd/*232/e2*as/d32837',   
}

const save = (key, payload) => {
    localStorage.setItem(key, JSON.stringify(payload))
}
const load = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const remove = (key) => {
    localStorage.removeItem(key)
}

export default { save, load, remove, keys }