export const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg4YjNjYzc2NmZiNTAwMjRhYTg3YTYiLCJpYXQiOjE2MTk1NzE2NjB9.7196kR2-KgUVbhy63G5I7vsxZs68JSqgByBVIyNqLZM",
};

export function getUser() {
  const apiURL = `https://coding-challenge-api.aerolab.co/user/me`;

  return fetch(apiURL, { headers })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export function getProducts() {
  const apiURL = `https://coding-challenge-api.aerolab.co/products`;

  return fetch(apiURL, { headers })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export const getRedeem = (id) => {
  const apiURL = `https://coding-challenge-api.aerolab.co/redeem`;

  return fetch(apiURL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      productId: id,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export const changePageNext = (setPageNumber, pageNumber) => {
  setPageNumber(pageNumber + 1);
};

export const changePagePrevious = (setPageNumber, pageNumber) => {
  if (pageNumber === 0) {
    setPageNumber(0);
  } else {
    setPageNumber(pageNumber - 1);
  }
};
