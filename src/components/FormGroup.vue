<!-- 
    ============================================================================
      FormGroup component
    ============================================================================
    Vue used for form-group divs that are we want to show validation
    prompts for.  Includes check or x icons.

    message:    optional message to show
    hasLabel:   does the form group have a label in it? (false)
-->

<template>
    <div class="form-group" :class="(hasLabel ? 'has-label' : '' )">
        <slot></slot>
        <span v-if="message" class="invalid-feedback">{{ message }}</span>
        <font-awesome-icon icon="check" class="valid-feedback text-success" />
        <font-awesome-icon icon="check" class="invalid-feedback text-danger" />
    </div>
</template>

<script>
export default {
    name: 'FormGroup',
    props: [ 'message', 'hasLabel' ]
}
</script>

