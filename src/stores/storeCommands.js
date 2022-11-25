import { defineStore } from 'pinia'

export const useCommandsStore = defineStore('storeCommands', {
    state: () => {
        return {
            commands: []
        }
    },
    actions: {
        async addCommand(command) {
            
            console.log('command', command)

            let commandCreateResponse = {}

            try {
                commandCreateResponse = await axios.post('/commands', command)
            }
            catch (error) {
                console.log('error', error)
            }            

            return commandCreateResponse.data
        }
    }
})