<template>
  <div class="space-y-3">
    <div
      v-if="members.length === 0"
      class="text-center py-12 bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors"
    >
      <p class="text-3xl mb-2">
        {{ role === 'admin' ? 'admins' : 'users' }}
      </p>
      <p class="text-slate-500 dark:text-slate-400 text-sm">
        No {{ role === 'admin' ? 'admins' : 'users' }} added yet
      </p>
    </div>

    <div
      v-for="member in members"
      :key="member.id"
      class="flex items-center gap-4 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl px-4 py-3 shadow-sm dark:backdrop-blur-sm transition-all hover:translate-x-1 duration-200"
    >
      <div
        :class="[
          'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm',
          role === 'admin' ? 'bg-purple-600' : 'bg-indigo-600'
        ]"
      >
        {{ member.name.charAt(0).toUpperCase() }}
      </div>

      <div class="min-w-0 flex-1">
        <p class="text-slate-800 dark:text-white font-medium truncate">{{ member.name }}</p>
        <p class="text-slate-500 dark:text-slate-400 text-xs truncate">{{ member.email }}</p>
      </div>

      <div class="flex items-center gap-2">
        <span
          :class="[
            'text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0',
            role === 'admin'
              ? 'bg-purple-50 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30'
              : 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30'
          ]"
        >
          {{ role }}
        </span>

        <button
          @click="$emit('delete-member', member.id)"
          class="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          title="Delete Member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberList',
  props: {
    members: {
      type: Array,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  emits: ['delete-member'],
};
</script>
