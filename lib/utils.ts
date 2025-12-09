const basePath = process.env.NODE_ENV === 'production' ? '/miyako-winterfes2025' : '';

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}

