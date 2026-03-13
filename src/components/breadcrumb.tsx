import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {allItems.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="size-3.5 shrink-0" />}
            {i === allItems.length - 1 ? (
              <span className="font-medium text-navy">{item.name}</span>
            ) : (
              <a
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
