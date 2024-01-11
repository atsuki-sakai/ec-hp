import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumberWithDots(number: string | number) {
  
  const str = number.toString();

  // 文字列を逆順にして、三桁ごとに小数点を挿入
  const formatted = str.split("").reverse().join('')
                     .replace(/(\d{3})(?=\d)/g, '$1,')
                     .split('').reverse().join('');

  return formatted;
}

function extractTextFromHTML(htmlString: string) {
  // DOMParserを使用してHTML文字列を解析
  const regex = /(<([^>]+)>)/ig;
  return htmlString.replace(regex, "");
}

export function truncateHTMLString(htmlString: string, maxLength: number = 10) {
  const text = extractTextFromHTML(htmlString)
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}
