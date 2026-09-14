import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'ghost' | 'light';
type Size = 'md' | 'lg';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans font-medium uppercase tracking-wide2 transition-all duration-500 ease-editorial disabled:cursor-not-allowed disabled:opacity-60';

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-[0.68rem]',
  lg: 'px-8 py-4 text-[0.7rem] sm:px-9',
};

const variants: Record<Variant, string> = {
  solid:
    'bg-charcoal text-ivory hover:bg-bronze hover:shadow-lift',
  outline:
    'border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory',
  ghost:
    'border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal',
  light: 'bg-ivory text-charcoal hover:bg-champagne',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  external?: never;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = 'solid',
    size = 'md',
    className = '',
    icon,
  } = props;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-500 ease-editorial group-hover/btn:translate-x-1">
          {icon}
        </span>
      ) : null}
    </>
  );

  if ('href' in props && props.href) {
    const external = props.external;
    return (
      <a
        href={props.href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {inner}
    </button>
  );
}
