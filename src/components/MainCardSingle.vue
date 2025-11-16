<script setup>
import { faker } from '@faker-js/faker'

// const firstname = faker.person.firstName()
// const lastname = faker.person.lastName()
// const fullname = faker.person.fullName({ firstName: firstname, lastName: lastname })
// const job_title = faker.person.jobTitle()
// const bio = faker.lorem.lines(2)
// const username = faker.internet.username({firstName: firstname, lastName: lastname}).toLowerCase()

const props = defineProps({
    employee: {
        type: Object,
        required: true,
        defualt: () => {
            return {
                    _id: "6910fd30f8d51ef1971e4419",
                    userName: "jperez",
                    firstName: "Joseph",
                    lastName: "Perez",
                    title: "Computer Scince Wizard",
                    quote: "You shall not pass",
                    __v: 0
            }  
        },
    },
})


</script>

<template>
    <!-- {{ fullname }}  <br />  -->
    <router-link :to="{ name: 'CardDetails', params: { id: props.employee._id }}">
        <div class="border border-gray-400 rounded-lg shadow bg-gray-200 h-full">
            <img class="object-fill h-480 w-960 rounded-t-x1" v-bind:src="faker.image.urlLoremFlickr({category: 'dog'})" />
            <div class="p-4">
                <p class="mb-2 text-2x1 font-bold">{{ props.employee.firstName }} {{ props.employee.lastName }}</p>
                <p class="mb-3 font-normal text-gray-700">{{ props.employee.title }}</p>
                <p class="mb-3 font-normal text-gray-700">{{ props.employee.quote }}</p>
            </div>
        </div>
    </router-link>
<!--   -->
</template>