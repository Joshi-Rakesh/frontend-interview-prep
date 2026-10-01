export type User = {
  id: number;
  name: string;
};

export const fetchUsers = async (page: number): Promise<User[]> => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      const users = Array.from({ length: 50 }, (_, index) => {
        const id = (page - 1) * 50 + index + 1;

        return {
          id,
          name: `User ${id}`,
        };
      });

      resolve(users);
    }, 800);
  });
};
