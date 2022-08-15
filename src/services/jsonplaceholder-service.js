export default class JsonplaceholderService {
  _apiBase = 'https://jsonplaceholder.typicode.com';

  async loadAllPosts() {
    const response = await fetch(`${this._apiBase}/posts`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return await response.json();
  }

  async createPost(post) {
    const response = await fetch(`${this._apiBase}/posts`, {
      method: 'POST',
      body: JSON.stringify({...post, userId: 1}),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return await response.json();
  }

  async removePost(post) {
    const response = await fetch(`${this._apiBase}/posts/${post.id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return await response.json();
  }
}
