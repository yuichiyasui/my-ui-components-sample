import { Link } from '@/components/ui/Link';

type Breadcrumb = {
  href: string;
  pageTitle: string;
};

type Props = {
  links: Breadcrumb[];
  className?: string;
};

export const Breadcrumbs = ({ links, className }: Props) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex">
        {links.map((link, index) => {
          const isLast = index + 1 === links.length;

          if (!isLast) {
            return (
              <li
                key={link.href}
                className="after:content-['/'] after:mx-2 after:text-gray-500"
              >
                <Link href={link.href}>{link.pageTitle}</Link>
              </li>
            );
          }

          return (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current="page"
                tabIndex={-1}
                className="pointer-events-none"
              >
                {link.pageTitle}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
