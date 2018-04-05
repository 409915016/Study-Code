const load = async function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://jsonplaceholder.typicode.com/posts/1",
      success: function(res) {
        resolve(res);
      },
      error: function(err) {
        reject(err);
      }
    });
  });
};



export { load };
