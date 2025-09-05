'use client';

import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  return (
    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">🇳🇴 Norsk</span>
    </div>
  );
}
