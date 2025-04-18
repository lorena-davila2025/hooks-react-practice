export const fetchData = (
  url: string,
  method: string = 'GET',
  body: any = null,
  successCallback?: (data: any) => void,
  errorCallback?: (err: any) => void
) => {
  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : null,
  })
    .then(res => res.json())
    .then(data => successCallback?.(data))
    .catch(err => errorCallback?.(err));
};
