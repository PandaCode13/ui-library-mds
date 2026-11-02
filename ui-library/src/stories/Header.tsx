import { useState } from 'react';
import './header.css';

type Role = 'visitor' | 'user' | 'admin';

export type HeaderUser = {
  name: string;
  role?: Exclude<Role, 'visitor'>;
};

export interface HeaderProps {
  user?: HeaderUser;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export interface AuthenticatedHeaderProps {
  user?: HeaderUser;
  onLogout?: () => void;
}

type NavItem = { label: string; href: string };

const VISITOR_NAV: NavItem[] = [
  { label: 'Les problèmes', href: '/problems' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const USER_NAV: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Bibliothèques', href: '/libraries' },
  { label: 'Archives', href: '/archives' },
];

const ADMIN_NAV: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Gestion des users', href: '/admin/users' },
  { label: 'Historique', href: '/admin/history' },
];

const USER_PROFILE_MENU: NavItem[] = [
  { label: 'Voir mon profil', href: '/profile' },
  { label: 'Paramètres', href: '/settings' },
  { label: 'Historique', href: '/history' },
];

const ADMIN_PROFILE_MENU: NavItem[] = [
  { label: 'Voir mon profil', href: '/admin/profile' },
  { label: 'Paramètres', href: '/admin/settings' },
];

const AuthenticatedHeader = ({
  user,
  onLogout,
  navigationLabel,
  navigation,
  profileItems,
}: AuthenticatedHeaderProps & {
  navigationLabel: string;
  navigation: NavItem[];
  profileItems: NavItem[];
}) => (
  <header>
    <div className="storybook-header">
      <Logo />
      <nav aria-label={navigationLabel}>
        <ul className="header-nav-list">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <ProfileMenu
            items={profileItems}
            onLogout={onLogout}
            label={user?.name || 'Profil'}
          />
        </ul>
      </nav>
    </div>
  </header>
);

export const UserHeader = (props: AuthenticatedHeaderProps) => (
  <AuthenticatedHeader
    {...props}
    navigationLabel="Navigation utilisateur"
    navigation={USER_NAV}
    profileItems={USER_PROFILE_MENU}
  />
);

export const AdminHeader = (props: AuthenticatedHeaderProps) => (
  <AuthenticatedHeader
    {...props}
    navigationLabel="Navigation administration"
    navigation={ADMIN_NAV}
    profileItems={ADMIN_PROFILE_MENU}
  />
);

const Logo = () => (
  <a href="/" className="header-logo">
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF"
        />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9"
        />
        <path
          d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
          fill="#91BAF8"
        />
      </g>
    </svg>
    <h1>Novelee</h1>
  </a>
);

const NavLinks = ({ items }: { items: NavItem[] }) => (
  <ul className="header-nav-list">
    {items.map((item) => (
      <li key={item.href}>
        <a href={item.href}>{item.label}</a>
      </li>
    ))}
  </ul>
);

const ProfileMenu = ({
  items,
  onLogout,
  label,
}: {
  items: NavItem[];
  onLogout?: () => void;
  label: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="header-profile">
      <button
        type="button"
        className="header-profile-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label} ▾
      </button>
      {open && (
        <ul className="header-profile-menu" role="menu">
          {items.map((item) => (
            <li key={item.href} role="none">
              <a href={item.href} role="menuitem" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li role="none">
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onLogout?.();
              }}
            >
              Déconnexion
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

export const Header = ({ user, onLogout }: HeaderProps) => {
  const role: Role = user ? user.role ?? 'user' : 'visitor';

  if (role === 'user') return <UserHeader user={user} onLogout={onLogout} />;
  if (role === 'admin') return <AdminHeader user={user} onLogout={onLogout} />;

  return (
    <header>
      <div className="storybook-header">
        <Logo />
        <nav aria-label="Navigation principale">
          <NavLinks items={VISITOR_NAV} />
          <a href="/register" className="header-cta">
            Rejoignez-nous
          </a>
        </nav>
      </div>
    </header>
  );
};