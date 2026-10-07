import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname, search, hash } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadCrumbs = pathSegments
    .slice(2)
    .map((segment) => decodeURIComponent(segment));

  return (
    <div className="flex gap-2">
      {breadCrumbs.map((e, i) => {
        return (
          <span key={`${e}-${i}`}>
            {i === breadCrumbs.length - 1 ? (
              <span className="capitalize text-gray-400">{e}</span>
            ) : (
              <Link
                className="capitalize"
                to={{
                  pathname:
                    i === 0
                      ? `/${pathSegments.slice(0, 2).join("/")}`
                      : `/${pathSegments.slice(0, i + 3).join("/")}`,
                  search,
                  hash,
                }}
              >
                {e}
              </Link>
            )}
            {i < breadCrumbs.length - 1 && (
              <span className="text-gray-400"> /</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
