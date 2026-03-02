import { Sun, Monitor, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const options = [
  { value: "light" as const, icon: Sun, label: "Light" },
  { value: "system" as const, icon: Monitor, label: "System" },
  { value: "dark" as const, icon: Moon, label: "Dark" },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-surface-inverted-foreground/15 p-[3px]">
      {options.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            aria-pressed={active}
            aria-label={`${label} theme`}
            className={`
              inline-flex items-center gap-1.5 rounded-full px-3 h-[30px]
              text-[13px] font-medium cursor-pointer border-none
              transition-all duration-150 ease-in-out
              min-w-[36px] justify-center
              ${active
                ? "bg-surface-inverted-foreground/15 text-surface-inverted-foreground shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                : "bg-transparent text-surface-inverted-foreground/50 hover:text-surface-inverted-foreground/70"
              }
            `}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
