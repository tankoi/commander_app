import { defineStore } from 'pinia'

export const useFileStore = defineStore('storeCommands', {
    state: () => {
        return {
        }
    },
    actions: {
        async upload(file) {
            try {
                return await axios.post('/file/upload', file)
            }
            catch (error) {
                console.log('error', error)
            }
        }
    }
})