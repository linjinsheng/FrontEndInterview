<template>
    <div>
        <label>姓：<input type="text" placeholder="请输入姓氏" v-model="firstName"></label>
        <p></p>
        <label>名：<input type="text" placeholder="请输入名字" v-model="lastName"></label>

        <p>-----------------------------------------------------------------------</p>
        <!--单向-->
        <label>姓 名：<input type="text" placeholder="请输入姓名" v-model="fullNameOne"></label>
        <p></p>
        <!--双向-->
        <label>姓 名：<input type="text" placeholder="请输入姓名" v-model="fullNameTwo"></label>
        <p></p>
        <!--双向-->
        <label>姓 名：<input type="text" placeholder="请输入姓名" v-model="fullNameThree"></label>
    </div>
</template>

<script>
    export default {
        name: "ComputedAndWatch",
        data(){
            return {
                firstName: '', // 姓
                lastName: '', // 名
                // 被watch监听改变
                fullNameThree: ''
            }
        },
        // 配置计算属性
        computed: {
            // 计算属性 姓名
            fullNameOne: {
               get(){
                   return this.firstName + '·' + this.lastName
               }
            },

            fullNameTwo: {
                get(){
                   // console.log(`调用了fullNameTwo的getter方法`);
                   return this.firstName + '·' + this.lastName;
                },
                set(value){
                    // console.log(`调用了fullNameTwo的setter方法, 值：${value}`);
                    // 1.更新firstName和lastName
                    let names = value.split('·');
                    console.log(names);
                    this.firstName = names[0];
                    this.lastName = names[1];
                }
            }
        },
        // 配置watch
        watch: {
            // 监听firstName
            firstName(value){
                console.log(`watch监视到firstName发生改变：${value}`);
                // 更新fullNameThree
                this.fullNameThree = value + '·' + this.lastName;
            },

            // 监听lastName
            lastName(value){
                console.log(`watch监视到lastName发生改变：${value}`);
                // 更新fullNameThree
                this.fullNameThree = this.firstName + '·' + value;
            }
        }
    }
</script>

<style scoped>

</style>