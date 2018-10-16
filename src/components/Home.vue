<template>
    <section class="bg-blue-lightest h-full py-8">
        <div class="w-5/6 max-w-lg ml-auto mr-auto h-full">
            <div class="flex items-center justify-center text-center h-full">
                <div>
                    <h1 class="text-4xl sm:text-5xl font-semibold leading-none tracking-tight mb-4">This is an insanely
                        big ass heading</h1>
                    <h2 class="text-2xl sm:text-3xl text-blue-darker opacity-75 font-normal leading-tight mb-8">This is
                        a little ass heading to provide additional support.</h2>
                    <div class="flex flex-col sm:flex-row justify-center pt-8">
                        <router-link to="/login" class="bg-blue hover:bg-blue-dark text-2xl leading-none text-white font-semibold h-12 px-8 rounded-full whitespace-no-wrap mb-2 sm:mb-0 sm:mr-2">
                            Get started
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
