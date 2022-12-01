import { defineStore } from 'pinia'

export const useFileStore = defineStore('storeCommands', {
    state: () => {
        return {
        }
    },
    actions: {
        async upload(file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                const headers = { 'Content-Type': 'multipart/form-data' };
                return await axios.post('/files/upload', formData, { headers })
            }
            catch (error) {
                console.log('error', error)
            }
        }
    }
})