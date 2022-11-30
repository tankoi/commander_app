<template>
    <div>
        <h1>User detail</h1>

        <h3>Profile image</h3>
        <input type="file" 
            id="profileImage" 
            name="profileImage" 
            ref="file"
            @change="onFileChanged" 
        >

        <div>
            <button @click="onUploadImage">Upload</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFileStore } from '@/stores/storeFiles'

const file = ref(null)
let uploadedFile = ref(null)

/*
    store
*/
const storeFiles = useFileStore()

/*
    events
*/
const onFileChanged = () => {
    uploadedFile = file.value.files[0];
}
const onUploadImage = () => {
}
</script>