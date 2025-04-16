import { create } from 'zustand';

export const useStore = create((set) => ({
  habits: [
    {
      id: '1',
      name: 'Drink Water',
      streak: 3,
      lastChecked: null,
      createdAt: new Date().toISOString(),
      completionDates: [
        "2025-01-01",
        "2025-01-02",
        "2025-01-03",
        "2025-01-04",
        "2025-01-05",
        "2025-01-06",
        "2025-01-07",
        "2025-01-08",
        "2025-01-09",
        "2025-01-10",
        "2025-01-11",
        "2025-01-12",
        "2025-01-13",
        "2025-01-14",
        "2025-01-15",
        "2025-01-16",
        "2025-01-17",
        "2025-01-18",
        "2025-01-19",
        "2025-01-20",
        "2025-01-21",
        "2025-01-22",
        "2025-01-23",
        "2025-01-24",
        "2025-01-25",
        "2025-01-26",
        "2025-01-27",
        "2025-01-28",
        "2025-01-29",
        "2025-01-30",
        "2025-01-31",
        "2025-02-01",
        "2025-02-02",
        "2025-02-03",
        "2025-02-04",
        "2025-02-05",
        "2025-02-06",
        "2025-02-07",
        "2025-02-08",
        "2025-02-09",
        "2025-02-10",
        "2025-02-11",
        "2025-02-12",
        "2025-02-13",
        "2025-02-14",
        "2025-02-15",
        "2025-02-16",
        "2025-02-17",
        "2025-02-18",
        "2025-02-19",
        "2025-02-20",
        "2025-02-21",
        "2025-02-22",
        "2025-02-23",
        "2025-02-24",
        "2025-02-25",
        "2025-02-26",
        "2025-02-27",
        "2025-02-28",
        "2025-03-01",
        "2025-03-02",
        "2025-03-03",
        "2025-03-04",
        "2025-03-05",
        "2025-03-06",
        "2025-03-07",
        "2025-03-08",
        "2025-03-09",
        "2025-03-10",
        "2025-03-11",
        "2025-03-12",
        "2025-03-13",
        "2025-03-14",
        "2025-03-15",
        "2025-03-16",
        "2025-03-17",
        "2025-03-18",
        "2025-03-19",
        "2025-03-20",
        "2025-03-21",
        "2025-03-22",
        "2025-03-23",
        "2025-03-24",
        "2025-03-25",
        "2025-03-26",
        "2025-03-27",
        "2025-03-28",
        "2025-03-29",
        "2025-03-30",
        "2025-03-31",
        "2025-04-01",
        "2025-04-02",
        "2025-04-03",
        "2025-04-04",
        "2025-04-05",
        "2025-04-06",
        "2025-04-07",
        "2025-04-08",
        "2025-04-09",
        "2025-04-10",
        "2025-04-11",
        "2025-04-12",
        "2025-04-13",
        "2025-04-14",
        "2025-04-15",
        "2025-04-16"
      ],
      reminderTime: '07:00'
    },
    {
      id: '2',
      name: 'Morning Run',
      lastChecked: null,
      createdAt: new Date().toISOString(),
      reminderTime: '07:00',
      completionDates: [
        "2025-01-01",
        "2025-01-03",
        "2025-01-04",
        "2025-01-12",
        "2025-01-14",
        "2025-01-15",
        "2025-01-16",
        "2025-01-17",
        "2025-01-18",
        "2025-01-22",
        "2025-01-31",
        "2025-02-01",
        "2025-02-02",
        "2025-02-09",
        "2025-02-10",
        "2025-02-11",
        "2025-02-16",
        "2025-02-18",
        "2025-02-21",
        "2025-02-23",
        "2025-02-25",
        "2025-02-26",
        "2025-02-28",
        "2025-03-03",
        "2025-03-06",
        "2025-03-08",
        "2025-03-11",
        "2025-03-13",
        "2025-03-14",
        "2025-03-15",
        "2025-03-16",
        "2025-03-20",
        "2025-03-22",
        "2025-03-23",
        "2025-03-25",
        "2025-03-26",
        "2025-03-28",
        "2025-03-31",
        "2025-04-02",
        "2025-04-03",
        "2025-04-05",
        "2025-04-06",
        "2025-04-07",
        "2025-04-10",
        "2025-04-15"
      ]
      ,
    },
    {
      id: '3',
      name: 'Read Book',
      streak: 45,
      lastChecked: null,
      createdAt: new Date().toISOString(),
      reminderTime: '07:00',
      completionDates: [
        [
          "2025-01-01",
          "2025-01-03",
          "2025-01-04",
          "2025-01-12",
          "2025-01-14",
          "2025-01-15",
          "2025-01-16",
          "2025-01-17",
          "2025-01-18",
          "2025-01-22",
          "2025-01-31",
          "2025-02-01",
          "2025-02-02",
          "2025-02-09",
          "2025-02-10",
          "2025-02-11",
          "2025-02-16",
          "2025-02-18",
          "2025-02-21",
          "2025-02-23",
          "2025-02-25",
          "2025-02-26",
          "2025-02-28",
          "2025-03-03",
          "2025-03-06",
          "2025-03-08",
          "2025-03-11",
          "2025-03-13",
          "2025-03-14",
          "2025-03-15",
          "2025-03-16",
          "2025-03-20",
          "2025-03-22",
          "2025-03-23",
          "2025-03-25",
          "2025-03-26",
          "2025-03-28",
          "2025-03-31",
          "2025-04-02",
          "2025-04-03",
          "2025-04-05",
          "2025-04-06",
          "2025-04-07",
          "2025-04-10",
          "2025-04-15"
        ]
      ],
    },
    {
      id: '4',
      name: 'Meditation',
      streak: 95,
      lastChecked: null,
      createdAt: new Date().toISOString(),
      reminderTime: '07:00',
      completionDates: [

        "2024-09-02",
        "2024-09-03",
        "2024-09-05",
        "2024-09-09",
        "2024-09-10",
        "2024-09-11",
        "2024-09-13",
        "2024-09-14",
        "2024-09-15",
        "2024-09-17",
        "2024-09-22",
        "2024-09-24",
        "2024-09-28",
        "2024-10-02",
        "2024-10-04",
        "2024-10-06",
        "2024-10-07",
        "2024-10-09",
        "2024-10-10",
        "2024-10-14",
        "2024-10-15",
        "2024-10-18",
        "2024-10-22",
        "2024-10-23",
        "2024-10-25",
        "2024-10-26",
        "2024-10-31",
        "2024-11-02",
        "2024-11-03",
        "2024-11-05",
        "2024-11-07",
        "2024-11-08",
        "2024-11-09",
        "2024-11-11",
        "2024-11-14",
        "2024-11-18",
        "2024-11-23",
        "2024-11-26",
        "2024-11-30",
        "2024-12-05",
        "2024-12-07",
        "2024-12-08",
        "2024-12-09",
        "2024-12-11",
        "2024-12-12",
        "2024-12-14",
        "2024-12-18",
        "2024-12-21",
        "2024-12-22",
        "2024-12-26",
        "2024-12-28",
        "2024-12-30",
        "2025-01-06",
        "2025-01-10",
        "2025-01-13",
        "2025-01-15",
        "2025-01-16",
        "2025-01-17",
        "2025-01-18",
        "2025-01-19",
        "2025-01-20",
        "2025-01-22",
        "2025-01-23",
        "2025-01-25",
        "2025-01-26",
        "2025-01-28",
        "2025-01-30",
        "2025-02-03",
        "2025-02-05",
        "2025-02-06",
        "2025-02-09",
        "2025-02-13",
        "2025-02-15",
        "2025-02-19",
        "2025-02-22",
        "2025-02-23",
        "2025-02-27",
        "2025-03-08",
        "2025-03-12",
        "2025-03-13",
        "2025-03-14",
        "2025-03-16",
        "2025-03-17",
        "2025-03-18",
        "2025-03-25",
        "2025-03-29",
        "2025-03-31",
        "2025-04-01",
        "2025-04-02",
        "2025-04-03",
        "2025-04-06",
        "2025-04-07",
        "2025-04-09",
        "2025-04-10",
        "2025-04-12"

      ],
    },
    {
      id: '5',
      name: 'Sleep Before 11PM',
      streak: 200,
      lastChecked: '2025-04-16',
      createdAt: '2025-04-16T00:00:00.000Z',
      reminderTime: '07:00',
      completionDates: [
        '2025-04-16',
        "2024-06-01",
        "2024-06-02",
        "2024-06-06",
        "2024-06-07",
        "2024-06-08",
        "2024-06-09",
        "2024-06-11",
        "2024-06-17",
        "2024-06-18",
        "2024-06-21",
        "2024-06-23",
        "2024-06-24",
        "2024-06-25",
        "2024-06-27",
        "2024-06-29",
        "2024-07-01",
        "2024-07-02",
        "2024-07-03",
        "2024-07-04",
        "2024-07-05",
        "2024-07-06",
        "2024-07-07",
        "2024-07-08",
        "2024-07-10",
        "2024-07-11",
        "2024-07-12",
        "2024-07-13",
        "2024-07-14",
        "2024-07-15",
        "2024-07-16",
        "2024-07-18",
        "2024-07-19",
        "2024-07-20",
        "2024-07-27",
        "2024-07-28",
        "2024-07-29",
        "2024-07-30",
        "2024-08-03",
        "2024-08-07",
        "2024-08-08",
        "2024-08-10",
        "2024-08-11",
        "2024-08-16",
        "2024-08-18",
        "2024-08-20",
        "2024-08-21",
        "2024-08-25",
        "2024-08-26",
        "2024-08-27",
        "2024-08-29",
        "2024-08-30",
        "2024-08-31",
        "2024-09-02",
        "2024-09-03",
        "2024-09-04",
        "2024-09-06",
        "2024-09-08",
        "2024-09-10",
        "2024-09-11",
        "2024-09-12",
        "2024-09-15",
        "2024-09-16",
        "2024-09-17",
        "2024-09-18",
        "2024-09-19",
        "2024-09-21",
        "2024-09-22",
        "2024-09-26",
        "2024-09-28",
        "2024-09-30",
        "2024-10-01",
        "2024-10-02",
        "2024-10-03",
        "2024-10-04",
        "2024-10-05",
        "2024-10-06",
        "2024-10-07",
        "2024-10-08",
        "2024-10-09",
        "2024-10-13",
        "2024-10-17",
        "2024-10-19",
        "2024-10-20",
        "2024-10-21",
        "2024-10-24",
        "2024-10-26",
        "2024-10-28",
        "2024-10-29",
        "2024-11-01",
        "2024-11-02",
        "2024-11-03",
        "2024-11-04",
        "2024-11-05",
        "2024-11-06",
        "2024-11-07",
        "2024-11-08",
        "2024-11-09",
        "2024-11-10",
        "2024-11-11",
        "2024-11-12",
        "2024-11-13",
        "2024-11-14",
        "2024-11-15",
        "2024-11-18",
        "2024-11-19",
        "2024-11-20",
        "2024-11-22",
        "2024-11-23",
        "2024-11-24",
        "2024-11-25",
        "2024-11-28",
        "2024-11-29",
        "2024-11-30",
        "2024-12-01",
        "2024-12-04",
        "2024-12-05",
        "2024-12-06",
        "2024-12-09",
        "2024-12-10",
        "2024-12-11",
        "2024-12-12",
        "2024-12-13",
        "2024-12-14",
        "2024-12-16",
        "2024-12-17",
        "2024-12-18",
        "2024-12-21",
        "2024-12-22",
        "2024-12-24",
        "2024-12-25",
        "2024-12-26",
        "2024-12-27",
        "2024-12-28",
        "2024-12-29",
        "2024-12-30",
        "2025-01-01",
        "2025-01-03",
        "2025-01-05",
        "2025-01-06",
        "2025-01-07",
        "2025-01-08",
        "2025-01-09",
        "2025-01-11",
        "2025-01-13",
        "2025-01-15",
        "2025-01-16",
        "2025-01-18",
        "2025-01-20",
        "2025-01-21",
        "2025-01-22",
        "2025-01-24",
        "2025-01-25",
        "2025-01-27",
        "2025-01-28",
        "2025-01-30",
        "2025-02-01",
        "2025-02-02",
        "2025-02-03",
        "2025-02-04",
        "2025-02-05",
        "2025-02-08",
        "2025-02-09",
        "2025-02-11",
        "2025-02-13",
        "2025-02-15",
        "2025-02-17",
        "2025-02-18",
        "2025-02-19",
        "2025-02-22",
        "2025-02-24",
        "2025-02-25",
        "2025-02-26",
        "2025-02-27",
        "2025-02-28",
        "2025-03-03",
        "2025-03-04",
        "2025-03-06",
        "2025-03-08",
        "2025-03-10",
        "2025-03-11",
        "2025-03-13",
        "2025-03-14",
        "2025-03-15",
        "2025-03-16",
        "2025-03-17",
        "2025-03-18",
        "2025-03-23",
        "2025-03-24",
        "2025-03-26",
        "2025-03-27",
        "2025-03-29",
        "2025-03-31",
        "2025-04-02",
        "2025-04-03",
        "2025-04-05",
        "2025-04-08",
        "2025-04-09",
        "2025-04-11",
        "2025-04-14",
        "2025-04-15"


      ],
    },
  ],
  darkMode: true,
  addHabit: (name) => {
    const newHabit = {
      id: Date.now().toString(),
      name,
      streak: 0,
      lastChecked: null,
      createdAt: new Date().toISOString(),
      reminderTime: '07:00',
      completionDates: [],
    };
    set((state) => ({ habits: [...state.habits, newHabit] }));
  },
  toggleHabit: (id) => {
    const today = new Date().toISOString().split('T')[0];

    set((state) => ({
      habits: state.habits.map((habit) => {
        if (habit.id !== id) return habit;

        const lastChecked = habit.lastChecked?.split('T')[0];

        if (!habit.lastChecked || lastChecked !== today) {
          return {
            ...habit,
            streak: habit.streak + 1,
            lastChecked: new Date().toISOString(),
            completionDates: [...habit.completionDates, today],
          };
        }

        return {
          ...habit,
          streak: Math.max(0, habit.streak - 1),
          lastChecked: null,
          completionDates: habit.completionDates.filter((date) => date !== today),
        };
      }),
    }));
  },
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
