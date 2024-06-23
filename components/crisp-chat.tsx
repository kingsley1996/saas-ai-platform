'use client';

import { Crisp } from 'crisp-sdk-web';
import React, { useEffect } from 'react';

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure('92400b10-5e57-4b29-9808-580e34e224a7');
  }, []);

  return null;
}
