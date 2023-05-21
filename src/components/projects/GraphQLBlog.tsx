import blog_post from '../../assets/blog-post.png'

const GraphQLBlog = () => {
  return (
    <div className="projects__card">
      <h3>Blog App - GraphQL</h3>
      <img src={blog_post} alt="GraphQLBlog" />
      <p>
        A simple Blog Post app where authenticated user can add blog to feed
        with images, can edit/delete content. Created using MongoDB (Mongoose),
        Express, GraphQL and React.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/graphql-feed-api.git"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
      </div>
    </div>
  )
}

export default GraphQLBlog
