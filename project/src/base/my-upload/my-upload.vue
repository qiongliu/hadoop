<template>
    <div class="my-upload">
        <div class="sl-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
                <img :src="item.url">
                <div class="sl-upload-item-cover">
                    <Icon type="ios-eye-outline" @click.native="preView(item.url)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="remove(item)"></Icon>
                </div>
            </template>
            <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
        </div>
        <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="/article/uploadImg"
            name="upload"
            style="display: inline-block;width:58px;">
            <div class="sl-icon-upload">
                <Icon type="upload" size="50"></Icon>
            </div>
        </Upload>
        <Modal title="View Image" v-model="visible">
            <img :src="preViewSrc" v-if="visible" style="width: 100%">
        </Modal>
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                defaultList: [],
                preViewSrc: '',
                visible: false,
                uploadList: []
            }
        },
        methods: {
            preView (name) {
                this.preViewSrc = name;
                this.visible = true;
            },
            remove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
                this.$emit('getUploadSrc','remove',file.url)
            },
            handleSuccess (res, file) {
                file.url = res.dir + '/' +　res.name;
                file.name = res.name;
                this.$emit('getUploadSrc','add',file.url)
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 1;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传一张图片'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
    }
</script>
<style lang="scss" scoped>
    .sl-icon-upload {
        width: 58px;
        height:58px;
        line-height: 58px;
    }
    .sl-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .sl-upload-list img{
        width: 100%;
        height: 100%;
    }
    .sl-upload-item-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .sl-upload-list:hover .sl-upload-item-cover{
        display: block;
    }
    .sl-upload-item-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
