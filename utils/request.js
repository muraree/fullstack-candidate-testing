const Api = {
  get: async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.json();
    } catch (error) {
      console.error('Error!!!', error);
    }
  },
}

export default Api;