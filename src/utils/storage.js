export const saveToStorage = (key, value) => {
    try {
      const serialized = JSON.stringify(value)
      localStorage.setItem(key, serialized)
    } catch (err) {
      console.error('Erro ao salvar no localStorage:', err)
    }
  }
  
  export const loadFromStorage = (key) => {
    try {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : null
    } catch (err) {
      console.error('Erro ao carregar do localStorage:', err)
      return null
    }
  }
  
  export const removeFromStorage = (key) => {
    localStorage.removeItem(key)
  }
  