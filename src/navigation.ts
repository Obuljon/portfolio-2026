import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Loyihangizda qo'llaniladigan tillar
  locales: ['en', 'uz', 'ru'],
  
  // Standart til
  defaultLocale: 'en'
});

// Yangi versiyada eksport qilish usuli
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);