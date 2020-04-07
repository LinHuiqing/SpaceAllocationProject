<template>
<div>
    <article v-for="(group,idx) in students" :key="idx">
        {{group.number}}
        {{group.length}}
        {{group.width}}
    </article>
</div>
</template>
<script>

import { db } from '../main'
export default {
    name: 'GroupsDetails',
    data(){
        return{
            students:[],
            number:'',
            length:'',
            width:''
        }
    },
    firestore() {
        return{
            students: db.collection('student').orderBy('length')
        }
    },
    // methods:{
    //     changeDimension (number, length, width){
    //         db.collection('student').number.lengt
    //     }
    // }
    
}
</script>