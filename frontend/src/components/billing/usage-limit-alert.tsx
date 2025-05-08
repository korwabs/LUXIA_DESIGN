import React from 'react';
import { XIcon } from 'lucide-react';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';

interface BillingErrorAlertProps {
  message?: string;
  currentUsage?: number;
  limit?: number;
  accountId?: string;
  onDismiss?: () => void;
  isOpen: boolean;
}

export function BillingErrorAlert({
  message,
  currentUsage,
  limit,
  accountId,
  onDismiss,
  isOpen,
}: BillingErrorAlertProps) {
  if (!isOpen) return null;

  // 사용량과 제한이 있으면 퍼센티지 계산
  const usagePercentage =
    currentUsage !== undefined && limit !== undefined
      ? Math.min(Math.round((currentUsage / limit) * 100), 100)
      : undefined;

  // 기본 메시지 설정
  const defaultMessage = '사용량 제한에 도달했습니다. 플랜을 업그레이드하세요.';

  return (
    <div className="fixed z-50 bottom-0 inset-x-0 pb-6 sm:pb-10 sm:px-6 lg:px-8 pointer-events-none flex flex-col items-center">
      <div className="pointer-events-auto w-full max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-zinc-900">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {message || defaultMessage}
              </p>

              {usagePercentage !== undefined && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>
                      {formatNumber(currentUsage || 0)}/{formatNumber(limit || 0)}
                    </span>
                    <span>{usagePercentage}%</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-yellow-400"
                      style={{ width: `${usagePercentage}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="mt-3 flex space-x-3">
                {accountId && (
                  <Link
                    href={`/accounts/${accountId}/settings/billing`}
                    className="rounded-md bg-[#A50034] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#A50034]/90 focus:outline-none focus:ring-2 focus:ring-[#A50034] focus:ring-offset-2"
                  >
                    플랜 업그레이드
                  </Link>
                )}

                {onDismiss && (
                  <button
                    type="button"
                    onClick={onDismiss}
                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A50034] focus:ring-offset-2 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700"
                  >
                    닫기
                  </button>
                )}
              </div>
            </div>
            {onDismiss && (
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A50034] focus:ring-offset-2 dark:bg-transparent dark:text-gray-500 dark:hover:text-gray-400"
                  onClick={onDismiss}
                >
                  <span className="sr-only">닫기</span>
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
