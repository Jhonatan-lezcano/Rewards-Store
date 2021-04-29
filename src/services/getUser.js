const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg4YjNjYzc2NmZiNTAwMjRhYTg3YTYiLCJpYXQiOjE2MTk1NzE2NjB9.7196kR2-KgUVbhy63G5I7vsxZs68JSqgByBVIyNqLZM",
};

export default function getUser() {
  const apiURL = `https://private-anon-46ef91a135-aerolabchallenge.apiary-mock.com/user/me`;

  return fetch(apiURL, headers)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}
