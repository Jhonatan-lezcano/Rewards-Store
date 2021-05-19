export const headers = {
  "Content-Type": "application/json",
  Authorization:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDljNTJmNzliNzc4MTAwMjA5YzVhOTUiLCJpYXQiOjE2MjA4NTc1OTF9.aCaa-p4_MCCJnEt4XH-vZsKBcADSb0K0GO7UVZJOiv4",
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

export const setRedeem = (id) => {
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

export const getHistory = () => {
  const apiURL = `https://coding-challenge-api.aerolab.co/user/history`;

  return fetch(apiURL, { headers })
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

export const setPoints = (amount) => {
  const apiURL = `https://coding-challenge-api.aerolab.co/user/points`;

  return fetch(apiURL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      amount,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};
