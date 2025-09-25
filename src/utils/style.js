import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 여러 Tailwind 클래스를 조건부로 합치고, 중복된 클래스를 정리합니다.
 * @param {...string | false | null | undefined} inputs - 합칠 클래스들
 * @returns {string} 최종 병합된 클래스 문자열
 */

export const cn = (...inputs) => twMerge(clsx(inputs));
