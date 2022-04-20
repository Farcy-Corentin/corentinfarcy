import create from "zustand";

const themeStore = (set, get) => ({
        isDarkMode:
            localStorage.getItem("dark-mode-enabled") === null
                ? true : !!JSON.parse(localStorage.getItem("dark-mode-enabled")),
                toggleDarkMode: () => {
        localStorage.setItem("dark-mode-enabled", !get().isDarkMode)
        set((state) => ({ isDarkMode: !state.isDarkMode }))
    }
})

const useThemeStore = create(themeStore)

export default useThemeStore
