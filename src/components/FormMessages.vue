<template>
    <ul class="message-list">
        <li v-for="msg in messages" :class="'alert alert-' + msg.type" :key="msg.message">
            <font-awesome-icon :icon="getIcon(msg.type)" />
            {{msg.message}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'MessageList',
        props: {
            messages: Array
        },
        methods: {
            getIcon: function(type) {
                if (type === 'danger') {
                    return 'exclamation-triangle';
                } else if (type === 'success') {
                    return 'check-circle';
                } else {
                    return null;
                }
            }           
        }
    }
</script>

<style lang="scss">
    .message-list { 
        list-style: none;
        padding-left: 0;
        margin-top: 18px;
    }    

</style>
