export const backend = {
  fetch: async (path: string) => {
    window._meta = import.meta.env;
    const fullUrl = `${import.meta.env.VITE_BACKEND_URL}${path}`;
    const response = await fetch(fullUrl);
    return response.json();
  },
};
