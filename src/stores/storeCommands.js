import { defineStore } from 'pinia'

export const useCommandsStore = defineStore('storeCommands', {
    state: () => {
        return {
            commands: []
        }
    },
    actions: {
        async addCommand(command) {
            try {
                return await axios.post('/commands', command)
            }
            catch (error) {
                console.log('error', error)
            }
        }
    }
})