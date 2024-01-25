import { useEffect } from 'react';

export function useDocumentTitle(title) {
    return useEffect(() => {
        const originalTitle = document.title;
        document.title = title;

        return () => {
            document.title = originalTitle;
        }
    }, [title]);
}