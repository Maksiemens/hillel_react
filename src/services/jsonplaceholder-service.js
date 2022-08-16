export default class JsonplaceholderService {
  _apiBase = 'https://jsonplaceholder.typicode.com';

  async loadAllPosts() {
    try {
      const response = await fetch(`${this._apiBase}/posts`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async createPost(post) {
    try {
      const response = await fetch(`${this._apiBase}/posts`, {
        method: 'POST',
        body: JSON.stringify({ ...post, userId: 1 }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updatePost(post) {
    try {
      const response = await fetch(`${this._apiBase}/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async removePost(post) {
    try {
      const response = await fetch(`${this._apiBase}/posts/${post.id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
