<template>
    <Modal
        v-model="showModal"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel"
        @on-visible-change="change">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
    	props: {
    		isShow: {
    			type: Boolean,
    			default: false
    		}
    	},
    	// computed: {
    	// 	showModal () {
    	// 		return this.isShow
    	// 	}
    	// },
        data () {
           return {
            	showModal: false
           }
        },
        watch: {
        	isShow (newVal,oldVal) {
        		if (newVal) {
        			this.showModal = true
        		}
        	}
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            change () {
            	console.log(1);
            	// this.isShow = false
            }
        }
    }
</script>
