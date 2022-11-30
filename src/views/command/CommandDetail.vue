<template>
    <div>
        <h1>Command detail</h1>

        <h3>How to</h3>
        <input v-model="command.howTo"/>

        <h3>Line</h3>
        <input v-model="command.line"/>

        <h3>Platform</h3>
        <input v-model="command.platform"/>

        <div>
            <button @click="onSaveCommand">Save</button>
        </div>
        
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useCommandsStore } from '@/stores/storeCommands'

/* store */
const storeCommands = useCommandsStore()

/* command */
const command = reactive({
    howTo: '',
    line: '',
    platform: ''
})

const onSaveCommand = async () => {
    const newCommandResponse = await storeCommands.addCommand(command)

    console.log('new command', newCommandResponse)
}

</script>