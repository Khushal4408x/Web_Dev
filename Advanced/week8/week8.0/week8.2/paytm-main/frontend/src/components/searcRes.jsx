import React, { useState, useEffect } from 'react';

export default function SearchRes({ query }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        let url;
        if (!query || query.trim() === '') {
          // Call bulk endpoint without pagination for search
          url = "http://localhost:3000/api/v1/user/bulk?limit=100";
        } else {
          url = `http://localhost:3000/api/v1/user/search?q=${encodeURIComponent(query.trim())}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          // If bulk requires auth and fails, try without limit param
          if (url.includes('/bulk') && response.status === 401) {
            const fallbackResponse = await fetch("http://localhost:3000/api/v1/user/bulk");
            if (!fallbackResponse.ok) {
              throw new Error(`Response status: ${fallbackResponse.status}`);
            }
            const res = await fallbackResponse.json();
            setUsers(res.users || res.user || []);
          } else {
            throw new Error(`Response status: ${response.status}`);
          }
        } else {
          const res = await response.json();
          setUsers(res.users || res.user || []);
        }
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [query]);

  if (loading) {
    return <div className="py-4 text-center text-gray-500">Searching...</div>;
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">Error: {error}</div>;
  }

  if (users.length === 0) {
    return <div className="py-4 text-center text-gray-500">No users found</div>;
  }

  return (
    <div className="mt-4">
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user._id} className="py-3 px-2 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-medium">
                    {user.firstName?.[0] || user.username?.[0] || 'U'}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}