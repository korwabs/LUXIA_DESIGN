import { useState, useCallback } from 'react';

interface BillingErrorDetail {
  message: string;
  currentUsage?: number;
  limit?: number;
  subscription?: {
    price_id: string;
    plan_name: string;
  };
}

export function useBillingError() {
  const [billingError, setBillingError] = useState<BillingErrorDetail | null>(null);

  const handleBillingError = useCallback((error: BillingErrorDetail) => {
    setBillingError(error);
  }, []);

  const clearBillingError = useCallback(() => {
    setBillingError(null);
  }, []);

  return {
    billingError,
    handleBillingError,
    clearBillingError,
  };
}
