<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';
    const { app, dialog } = remote;

    import UserSettings from '@/modules/module.usersettings.js';

    export default {
        name: 'App',
        components: {
        },
        data: function() {
            return {
            }
        },
        mounted: function() {
        },
        methods: {
        }
    }
</script>

<style lang="less">
    html {
        box-sizing: border-box;
        -webkit-user-select: none;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        background: #212629;
        color: #fff;
        overflow: hidden;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
    }
    ::-webkit-scrollbar {
        background: #212529;
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #fff;
    }
    a {  text-decoration: none; }
    #app:focus {
        outline: none;
    }
</style>
