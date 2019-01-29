function a() {
  const maPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 1000);
  });

  console.log(maPromise);

  maPromise.then(result => {
    console.log(result);
  });

  //const result = await maPromise;

  //console.log(result);

  return maPromise;
}

a(); //?
