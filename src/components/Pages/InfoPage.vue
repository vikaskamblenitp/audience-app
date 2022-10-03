<template>
    <h2>Political Information</h2>
    <ul>
        <base-card v-for="data in info" :key="data.id">
            <h3>{{ data.name }}</h3>
            <p><span>Designation:</span> {{ data.designation }}</p>
            <p><span>Age:</span> {{ data.age }}</p>
            <p><span>Contact No:</span> {{ data.phone }}</p>
        </base-card>
    </ul>
</template>

<script>

export default {
    data(){
        return{
            info: [{id:1, name:'Devidas Mukhmale',age:50, phone:'8980897889',designation: 'Sarpanch'},
            {id:1, name:'Shridhar Ingole', age:50, phone:'9800997809',designation: 'Dy. Sarpanch'},
            {id:3, name:'Rashtrapal Ingle',age:32, phone:'9078897800',designation: 'Sadasya'},
            {id:4, name:'Namdeo',age:35, phone:'8078877820',designation: 'Sadasya'},
            {id:5, name:'Anna Ingole',age:32, phone:'9778897855',designation: 'Sadasya'},
            ],
        }
    }
}
</script>
<style scoped>
h2,h3 {
		font-weight: 600;
		text-align: center;
		margin-top: 2px;
		margin-bottom: 8px;
	}
</style>