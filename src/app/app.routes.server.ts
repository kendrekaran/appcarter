import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'audit/:id',
        renderMode: RenderMode.Prerender,
        getPrerenderParams: async () => {
            // Generate params for all possible service IDs (0-4 based on the services array)
            return Array.from({ length: 5 }, (_, i) => ({ id: i.toString() }));
        }
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];