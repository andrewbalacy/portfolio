interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

export default function NavLink({
  href,
  children,
  onClick,
  className,
  active,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={`text-sm transition-colors focus-ring ${
        active
          ? "text-foreground"
          : "text-subtle hover:text-foreground"
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </a>
  );
}
