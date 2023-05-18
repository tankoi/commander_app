<template>
    <div>
        <h1>User detail</h1>

        <h3>Profile image</h3>
        <input type="file" id="profileImage" name="profileImage" ref="file" @input="onFileChanged">

        <div id="preview">
            <img :src="url" />
        </div>

        <div>
            <button @click="onUploadImage">Upload</button>
        </div>
    </div>
</template>

<script setup>
import { nextTick, ref, reactive } from 'vue'
import { useFileStore } from '@/stores/storeFiles'

const image = ref(null);
const url = ref('')

/*
    store
*/
const storeFiles = useFileStore()

/*
    events
*/
const onFileChanged = (e) => {
    if (e.target && e.target.files.length > 0) {
        image.value = e.target.files.item(0)
        url.value = URL.createObjectURL(image.value)
    }
}

const onUploadImage = async () => {
    await storeFiles.upload(image.value)
}
</script>