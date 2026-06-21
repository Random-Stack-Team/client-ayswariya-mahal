export const routeLoaders = Object.freeze({
  "/": () => import("../pages/Home"),
  "/about": () => import("../pages/About"),
  "/facilities": () => import("../pages/Facilities"),
  "/gallery": () => import("../pages/Gallery"),
  "/reviews": () => import("../pages/Reviews"),
  "/contact": () => import("../pages/Contact"),
  "/sowbhagya-mahal": () => import("../pages/SowbhagyaMahal"),
});

const warmedRoutes = new Map();

export const prefetchRoute = (path) => {
  const loader = routeLoaders[path];
  if (!loader) return Promise.resolve();

  if (!warmedRoutes.has(path)) {
    warmedRoutes.set(path, loader().catch(() => warmedRoutes.delete(path)));
  }

  return warmedRoutes.get(path);
};

export const warmPrimaryRoutes = () => {
  void Promise.allSettled([
    prefetchRoute("/about"),
    prefetchRoute("/facilities"),
    prefetchRoute("/gallery"),
    prefetchRoute("/reviews"),
    prefetchRoute("/contact"),
    prefetchRoute("/sowbhagya-mahal"),
  ]);
};

export const getRoutePrefetchHandlers = (path) => ({
  onMouseEnter: () => void prefetchRoute(path),
  onFocus: () => void prefetchRoute(path),
  onTouchStart: () => void prefetchRoute(path),
});
