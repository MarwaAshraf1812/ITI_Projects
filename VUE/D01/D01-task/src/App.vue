<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50/50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 transition-colors duration-300">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white tracking-tight transition-colors">
            User & Admin Management
          </h1>
          <p class="text-slate-500 dark:text-slate-400 mt-1 transition-colors">
            Manage your team members in one place
          </p>
        </div>
        <button
          @click="toggleTheme"
          class="self-start sm:self-auto p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-amber-400 shadow-md hover:shadow-lg dark:shadow-slate-950/20 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Toggle Theme"
        >
          <span v-if="isDark" class="flex items-center gap-2 text-sm font-semibold">
            ☀️ Light Mode
          </span>
          <span v-else class="flex items-center gap-2 text-sm font-semibold text-slate-700">
            🌙 Dark Mode
          </span>
        </button>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start justify-center">
        <div class="w-full max-w-md bg-white dark:bg-white/10 dark:backdrop-blur-md border border-slate-200 dark:border-white/20 rounded-2xl shadow-xl dark:shadow-2xl p-8 transition-colors duration-300">
          <div class="mb-8 text-center">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">Add New Member</h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Fill in the details below to add a team member</p>
          </div>

          <form @submit.prevent="addMember" class="space-y-5">
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-slate-600 dark:text-slate-300">Full Name</label>
              <input
                type="text"
                v-model.trim="formValues.name"
                required
                placeholder="John Doe"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-slate-600 dark:text-slate-300">Email Address</label>
              <input
                type="email"
                v-model.trim="formValues.email"
                required
                placeholder="john@example.com"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-slate-600 dark:text-slate-300">Role</label>
              <select
                v-model="formValues.role"
                required
                class="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer"
              >
                <option value="" disabled class="text-slate-400 dark:text-slate-500">Select Role</option>
                <option value="user" class="text-slate-800 dark:text-white">User</option>
                <option value="admin" class="text-slate-800 dark:text-white">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              class="w-full mt-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 active:scale-95 transition-all duration-200 shadow-lg shadow-indigo-500/30 cursor-pointer"
            >
              Add Member
            </button>
          </form>
        </div>

        <div class="w-full max-w-md">

          <!-- Tabs -->
          <div class="flex rounded-xl overflow-hidden border border-slate-200 dark:border-white/20 mb-6 shadow-sm">
            <button
              @click="activeTab = 'users'"
              :class="[
                'flex-1 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer',
                activeTab === 'users'
                  ? 'bg-indigo-600 text-white shadow-inner'
                  : 'bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-800 dark:hover:text-white'
              ]"
            >
              Users ({{ Usermembers.length }})
            </button>
            <button
              @click="activeTab = 'admins'"
              :class="[
                'flex-1 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer',
                activeTab === 'admins'
                  ? 'bg-purple-600 text-white shadow-inner'
                  : 'bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-800 dark:hover:text-white'
              ]"
            >
              Admins ({{ Adminmembers.length }})
            </button>
          </div>
          <MemberList
            v-if="activeTab === 'users'"
            :members="Usermembers"
            role="user"
            @delete-member="deleteMember"
          />
          <MemberList
            v-else
            :members="Adminmembers"
            role="admin"
            @delete-member="deleteMember"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberList from './components/MemberList.vue';

export default {
  name: 'App',
  components: { MemberList },
  data() {
    return {
      activeTab: 'users',
      Adminmembers: [
        { id: 1, name: 'Eng. Sarah Ahmed', email: 'sarah.admin@example.com', role: 'admin' }
      ],
      Usermembers: [
        { id: 2, name: 'Mohamed Ali', email: 'mohamed.user@example.com', role: 'user' }
      ],
      formValues: {
        name: '',
        email: '',
        role: '',
      },
      isDark: true,
    };
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.updateThemeClass();
  },
  methods: {
    addMember() {
      const { name, email, role } = this.formValues;
      if (!name || !email || !role) {
        alert('Please fill in all fields.');
        return;
      }

      const newMember = {
        id: Date.now(),
        name,
        email,
        role
      };

      if (role === 'admin') {
        this.Adminmembers.push(newMember);
      } else {
        this.Usermembers.push(newMember);
      }

      this.formValues = {
        name: '',
        email: '',
        role: '',
      };
    },
    deleteMember(id) {
      if (this.activeTab === 'users') {
        this.Usermembers = this.Usermembers.filter(member => member.id !== id);
      } else {
        this.Adminmembers = this.Adminmembers.filter(member => member.id !== id);
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      this.updateThemeClass();
    },
    updateThemeClass() {
      if (this.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
};
</script>
