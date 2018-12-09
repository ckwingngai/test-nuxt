<template>
  <section class="container">
    <div>
      <el-row>
        <el-col :span="8">
          <div class="grid-content left">
            Account Name:
            <el-input 
              v-model="accountName"
              placeholder="Please input" 
              clearable/>
            Initail Balance:
            <el-input-number
              v-model="initBal"
              :min="0"/>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content middle">
            <button @click="onAdd()">TEST</button>
          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content right">3</div></el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      accountName: '',
      initBal: 0
    }
  },
  methods: {
    onAdd() {
      console.log('on add')
      // this.$store.commit('increment')
      this.addAccount({ key: this.accountName, value: this.initBal })
    },
    ...mapActions({
      addAccount: 'addAccount'
      // increment: 'increment'
    })
  }
}
</script>

<style scoped>
.left {
  background-color: #99a9bf;
}
.middle {
  background-color: #d3dce6;
}
.right {
  background-color: #e5e9f2;
}
</style>
