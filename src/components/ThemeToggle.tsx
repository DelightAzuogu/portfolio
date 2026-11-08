import type { Theme } from "../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  className?: string;
};

export function ThemeToggle({
  theme,
  onToggle,
  className = "",
}: ThemeToggleProps) {
  const other = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={`flex-none cursor-pointer font-bold whitespace-nowrap text-amt underline-offset-4 hover:underline ${className}`.trim()}
      onClick={onToggle}
      aria-label={`Switch to ${other} theme`}
    >
      theme: {theme}
    </button>
  );
}
