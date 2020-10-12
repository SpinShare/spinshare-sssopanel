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
        font-family: 'Product Sans', sans-serif;
        font-size: 14px;
        -webkit-user-select:none;
    }
    ::-webkit-scrollbar {
        background: #212529;
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #fff;
    }
    a {  text-decoration: none; }
    *:focus {
        outline: none;
    }
    .button, button {
        background: rgba(255,255,255,0.22);
        color: #fff;
        font-weight: 16px;
        padding: 10px 20px;
        border-radius: 4px;
        text-align: center;
        display: inline-block;
        border: 0px;
        outline: 0px;

        &:not(:disabled):hover {
            background: rgba(255,255,255,0.35);
            cursor: pointer;
        }
        &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
    }

    .tooltip {
        background: #000;
        font-size: 10px;
        padding: 4px 10px;
        text-transform: uppercase;
        border-radius: 4px;

        &[x-placement="left"] {
            margin-right: 0px;

            &:after {
                content: "";
                position: absolute;
                top: 5px;
                right: -5px;
                width: 0; 
                height: 0; 
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent; 
                border-left:6px solid #000; 
            }
        }
    }
</style>
