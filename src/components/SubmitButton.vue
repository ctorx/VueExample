<template>
    <div class="form-group">
        <button  v-if="!inProgress" type="submit" :class="btnClass">{{ btnText }}</button>
        <div v-if="inProgress" class="working">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>    
</template>


<script>
export default {
    name:   'SubmitButton',
    props: {
        className: String,
        btnClass: String,
        btnText: String,
        inProgress: Boolean
    }
}
</script>

<style lang="scss">

    .working {

        > div {
            width: 14px;
            height: 14px;
            margin: 0 2px;
            background-color: rgba(129, 55, 26, 0.8);
            border-radius: 100%;
            display: inline-block;
            -webkit-animation: spinner 1.4s infinite ease-in-out both;
            animation: spinner 1.4s infinite ease-in-out both;
            vertical-align: bottom;
        }

        div:first-of-type {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        div:nth-of-type(2) {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }
    }

    .empty-loader .working {
        margin-top: 18px;
    }

    @-webkit-keyframes spinner {
        0%, 80%, 100% {
            -webkit-transform: scale(0)
        } 

        40% {
            -webkit-transform: scale(1.0)
        }
    }

    @keyframes spinner {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }

        40% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
    }
</style>
