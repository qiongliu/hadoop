<template>
    <div class="sl-nav">
        <Menu mode="horizontal" :theme="theme" @on-select="clickNav" :active-name="navList[activeIndex].id">
            <div class="comWidth">
                <slot></slot> 
                <template v-for="item in navList">
                    <MenuItem class="sl-item" :name="item.id" v-if="!item.sub">
                        {{item.name}}
                    </MenuItem>
                    <Submenu class="sl-item" :name="item.id" v-if="item.sub">
                        <template slot="title">
                            {{item.name}}
                        </template>
                        <MenuItem :name="subItem.id" v-for="subItem in item.sub" :key="subItem.id">{{subItem.name}}</MenuItem>
                    </Submenu>
                </template>
            </div>
        </Menu>
    </div>
</template>
<script>
    export default {
        props: {
            navList: {
                type: Array,
                default: []
            }
        },
        data () {
            return {
                theme: 'primary',
                activeIndex: 0
            }
        },
        methods: {
            clickNav (name) {
                this.activeIndex = name
            }
        }
    }
</script>

<style lang="scss">
    @import '../../common/css/variable.scss';
    .sl-nav .sl-item {
        font-size: $fz-md;
        padding: 0 16px;
    }
</style>
