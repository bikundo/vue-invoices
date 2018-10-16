<template>
    <div class=" flex  content-center justify-center ">
        <form class="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-6 align-middle w-1/5">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
            </div>
            <div class=" ">
                <button class="bg-transparent hover:bg-blue text-blue-dark self-stretch font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                    log in
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>