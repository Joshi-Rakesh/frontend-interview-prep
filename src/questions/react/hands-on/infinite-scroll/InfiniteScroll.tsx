import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { fetchUsers, type User } from "./services/userService";

const InfiniteScroll = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !isloading && hasMore) {
          setPage((page) => page + 1);
        }
      },
      { threshold: 1 },
    );

    const loadingElement = loadingRef.current;
    if (loadingElement) {
      observer.observe(loadingElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [isloading, hasMore]);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      const usersData = await fetchUsers(page);
      if (usersData?.length) {
        setUsers((prevUsers) => [...prevUsers, ...usersData]);
      }
      if (page >= 10) {
        setHasMore(false);
      }
      setIsLoading(false);
    };
    loadUsers();
  }, [page]);

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <ul className="list-disc pl-6">
        {users?.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <div
        className="text-center flex justify-center w-full py-2"
        ref={loadingRef}
      >
        {isloading ? (
          <div
            role="status"
            aria-live="polite"
            className="flex items-center justify-center gap-3"
          >
            <Spin size="large" />
            <span className="text-sm font-medium">Loading users...</span>
          </div>
        ) : (
          "End of user List"
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
