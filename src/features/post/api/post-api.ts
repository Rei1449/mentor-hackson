const getPost = async () => {
  const res = await fetch('http://localhost:3020/api/post')
  const json = await res.json()
  return json.posts
}
