<template>
    <div class="container">
        <div class="top">
            <van-nav-bar
            fixed
            placeholder
            title=""
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="loginForm">
            <van-form @submit="onSubmit">
                <div class='username'>
                    <img src="../assets/login/username.png" alt="">
                    <van-field
                    v-model="loginForm.username"
                    name="用户名"
                    label=""
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                </div>
                <div class="password">
                    <img src="../assets/login/password.png" alt="">
                    <van-field
                    v-model="loginForm.password"
                    type="password"
                    name="密码"
                    label=""
                    placeholder="密码"
                    :rules="[{ validator, message: '请输入正确密码' }]"
                    />
                </div>
                <div class="loginBottom">
                    <van-button round block type="danger" native-type="submit">登录</van-button>
                    <span class="register" @click="getRegister">注册账号</span>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
             loginForm:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        onClickLeft(){
            console.log('返回')
            this.$router.back(-1)
        },
        validator(val){
            let reg=/^(\w){0,6}$/;
            return !reg.exec(val)
        },
        onSubmit(values) {
            console.log('submit', values);
        },
        getRegister(){
            this.$router.push('/register')
        }
    }
}
</script>
<style scoped>
.container{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#fafafa;
}
.top /deep/ .van-nav-bar{
    background-color:#fafafa;
}
.loginForm{
    width:80%;
    height:40%;
}
.loginForm /deep/ .van-form{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.username{
    width:100%;
    height:20%;
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.username img{
    height:60%;
}
.password{
    width:100%;
    height:20%;
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.password img{
    height:60%;
}
.loginForm /deep/ .van-cell{
    background-color:transparent;
    border-bottom:1px solid #e8e8e8;
}
.loginBottom{
    width:80%;
    height:40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.loginBottom .register{
    margin:10px 0;
    font-size:14px;
    color:red;
}
</style>
