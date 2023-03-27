<template>
  <div class="pb-16 header-events ">
    <div class="mt-10 max-w-2xl mx-auto px-4 md:text-center py-4 rounded-md bg-white">
      <h2 class="text-3xl font-semibold py-2">Recent Events</h2>
      <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum eligendi esse aliquam soluta, placeat voluptatem</p>
      
      <h2 class="sr-only">Sign up for our newsletter</h2>
      <form action="https://app.convertkit.com/forms/3181837/subscriptions" method="post" class="flex flex-wrap -mx-2">
        <div class="px-2 grow-[9999] basis-64 mt-3">
          <div class="group relative">
            <input name="email_address" type="email" required="" autocomplete="email" aria-label="Email address" class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white" placeholder="Subscribe via email">
          </div>
        </div>
        <div class="px-2 grow flex mt-3">
          <button type="submit" class="bg-sky-500 flex-autfo shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name:'LoopHeader'
}
</script>